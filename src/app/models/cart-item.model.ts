import { Product, Color } from './product.model';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: Color;
}
