import { CartItem } from './cart-item.model';

export interface Order {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  address: string;
  buildingNumber: string;
  items: CartItem[];
  totalPrice: number;
  deliveryFee: number;
}

export interface JordanGovernorate {
  name: string;
  nameAr: string;
  deliveryFee: number;
}
