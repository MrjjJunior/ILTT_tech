
export interface Product {
  name: string;
  price: string;
  features: string;
  tag?: string;
  image?: string;
}

export interface Category {
  name: string;
  products: Product[];
}
