import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Product, Color } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  getCartItems(): CartItem[] {
    return this.cartItems.value;
  }

  addToCart(product: Product, quantity: number = 1, selectedColor?: Color): void {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(
      (item) =>
        item.product.id === product.id &&
        (!selectedColor || item.selectedColor?.hex === selectedColor.hex)
    );

    if (existingItem) {
      existingItem.quantity += quantity;
      this.cartItems.next([...currentItems]);
    } else {
      const newItem: CartItem = {
        product,
        quantity,
        selectedColor,
      };
      this.cartItems.next([...currentItems, newItem]);
    }
  }

  removeFromCart(cartItem: CartItem): void {
    const currentItems = this.cartItems.value;
    const updatedItems = currentItems.filter(
      (item) =>
        !(
          item.product.id === cartItem.product.id &&
          (!cartItem.selectedColor || item.selectedColor?.hex === cartItem.selectedColor.hex)
        )
    );
    this.cartItems.next(updatedItems);
  }

  updateQuantity(cartItem: CartItem, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(cartItem);
      return;
    }

    const currentItems = this.cartItems.value;
    const item = currentItems.find(
      (item) =>
        item.product.id === cartItem.product.id &&
        (!cartItem.selectedColor || item.selectedColor?.hex === cartItem.selectedColor.hex)
    );

    if (item) {
      item.quantity = quantity;
      this.cartItems.next([...currentItems]);
    }
  }

  getTotalPrice(): number {
    return this.cartItems.value.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  getItemCount(): number {
    return this.cartItems.value.reduce((total, item) => total + item.quantity, 0);
  }

  clearCart(): void {
    this.cartItems.next([]);
  }

  getQuantityForProduct(productId: number): number {
    const items = this.cartItems.value.filter((item) => item.product.id === productId);
    return items.reduce((total, item) => total + item.quantity, 0);
  }
}
