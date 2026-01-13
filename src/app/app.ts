import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  cartItemCount: number = 0;
  private subscription: Subscription = new Subscription();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.cartService.cartItems$.subscribe(() => {
      this.cartItemCount = this.cartService.getItemCount();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
