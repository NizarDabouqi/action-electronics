import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartItem } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit, OnDestroy {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  private subscription: Subscription = new Subscription();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  updateQuantity(item: CartItem, quantity: number): void {
    this.cartService.updateQuantity(item, quantity);
  }

  increaseQuantity(item: CartItem): void {
    this.updateQuantity(item, item.quantity + 1);
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      this.updateQuantity(item, item.quantity - 1);
    } else {
      this.removeFromCart(item);
    }
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  getItemCount(): number {
    return this.cartService.getItemCount();
  }
}
