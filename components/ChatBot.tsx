
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, ShieldCheck } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_INSTRUCTION = `
You are a helpful and professional AI assistant for ILTT TECH, a premium security and smart home solutions company.
Your goal is to answer customer questions accurately based on the company information provided.

Company Info:
- Name: ILTT TECH
- Services: Professional security installation, high-definition CCTV, 100% wireless solar cameras, biometric smart locks, and WiFi networking extensions.
- Core Values: Simplicity (Plug & Play), All-Inclusive Value (Installation included in most prices), Latest Tech (AI Human Detection, Full-Color Night Vision).

Product Range:
1. Wireless & Solar Security:
   - 3MP 4G Solar PTZ Camera: R1300 (Best Seller). Features: 100% Wire-Free, Auto Tracking, PIR Human Detection.
   - HiMost 6MP Dual-Lens Solar Camera: R1700. Features: Ultra HD 6MP, Dual Screen (Wide + Zoom), Active Defense Alarm.
   - HiMost WiFi Solar Camera (VCS20): R1400. Features: Large battery, IP66 Waterproof.

2. CCTV Systems:
   - 8CH 2MP WiFi NVR Kit: R2500. Features: 4x WiFi Cameras, 500GB HDD, XMEye App.
   - Hikvision 720P Turbo HD Kit: R2600. Features: 4 Channel DVR, Cabling, Full Installation.
   - Hikvision 8 Channel 1080P Complete Kit: R7500. Features: 8x Cameras, 1TB HDD, Central Power Supply.

3. Smart Access:
   - Intelligent WiFi Smart Door Lock: R1700. Features: Fingerprint, IC Card, App Control, Passcodes.
   - Wi-Fi Extension Services: From R800. Features: Dual Band Gigabit Routers.

Tone: Professional, tech-savvy, trustworthy, and concise. 
If asked about something not mentioned, politely suggest they request a custom assessment via the contact form on the website.
All prices include installation for most packages.
`;

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm the ILTT TECH assistant. How can I help you secure your property today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatInstance = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initChat = () => {
    if (!chatInstance.current) {
      const ai = new GoogleGenAI({ apiKey: (process.env as any).API_KEY });
      chatInstance.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }
    return chatInstance.current;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const chat = initChat();
      const responseStream = await chat.sendMessageStream({ message: userMessage });
      
      let fullResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of responseStream) {
        const chunkText = (chunk as GenerateContentResponse).text || '';
        fullResponse += chunkText;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: 'model', text: fullResponse };
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I encountered an error. Please try again or use the contact form." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#1D1D1F] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-[24px] shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-4 bg-[#1D1D1F] text-white flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#333333] rounded-lg flex items-center justify-center border border-white/10">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">ILTT TECH Support</p>
                <p className="text-[10px] text-gray-400">Online & Ready to Help</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-[#F5F5F7]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#1D1D1F] text-white rounded-br-none'
                      : 'bg-white text-[#1D1D1F] shadow-sm rounded-bl-none border border-gray-100'
                  }`}
                >
                  {msg.text || (isLoading && idx === messages.length - 1 ? <Loader2 className="animate-spin" size={16} /> : '')}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask about products or services..."
                className="w-full bg-[#F5F5F7] border-none rounded-xl px-4 py-3 pr-12 text-sm focus:ring-2 focus:ring-[#1D1D1F] transition-all outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#1D1D1F] hover:text-black disabled:opacity-30"
              >
                {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
              </button>
            </div>
            <p className="text-[9px] text-[#86868B] text-center mt-2">Powered by ILTT TECH AI</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
