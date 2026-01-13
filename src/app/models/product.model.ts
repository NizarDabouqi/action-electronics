export interface Product {
  id: number;
  name: string;
  nameAr: string; // Arabic name
  price: number;
  images: string[];
  characteristics: string[];
  characteristicsAr: string[]; // Arabic characteristics
  availableColors: Color[];
  description: string;
  descriptionAr: string;
}

export interface Color {
  name: string;
  nameAr: string;
  hex: string;
}
