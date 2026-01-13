import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from '../../models/cart-item.model';
import { JordanGovernorate } from '../../models/order.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order-form.html',
  styleUrl: './order-form.css',
})
export class OrderForm implements OnInit {
  orderForm: FormGroup;
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  deliveryFee: number = 0;
  jordanGovernorates: JordanGovernorate[] = [
    { name: 'Amman', nameAr: 'عمان', deliveryFee: 5 },
    { name: 'Zarqa', nameAr: 'الزرقاء', deliveryFee: 10 },
    { name: 'Balqa', nameAr: 'البلقاء', deliveryFee: 10 },
    { name: 'Madaba', nameAr: 'مادبا', deliveryFee: 10 },
    { name: 'Karak', nameAr: 'الكرك', deliveryFee: 15 },
    { name: 'Aqaba', nameAr: 'العقبة', deliveryFee: 20 },
    { name: "Ma'an", nameAr: 'معان', deliveryFee: 15 },
    { name: 'Tafilah', nameAr: 'الطفيلة', deliveryFee: 15 },
    { name: 'Irbid', nameAr: 'إربد', deliveryFee: 12 },
    { name: 'Jerash', nameAr: 'جرش', deliveryFee: 12 },
    { name: 'Ajlun', nameAr: 'عجلون', deliveryFee: 12 },
    { name: 'Mafraq', nameAr: 'المفرق', deliveryFee: 15 },
  ];

  showConfirmation: boolean = false;
  showThankYou: boolean = false;

  constructor(private fb: FormBuilder, private cartService: CartService, private router: Router) {
    this.orderForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, this.jordanianPhoneValidator]],
      city: ['', Validators.required],
      address: ['', Validators.required],
      buildingNumber: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
    this.updateDeliveryFee();

    this.orderForm.get('city')?.valueChanges.subscribe(() => {
      this.updateDeliveryFee();
    });
  }

  jordanianPhoneValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    if (!value) return null;

    // Remove spaces and dashes
    const cleanValue = value.replace(/[\s\-]/g, '');

    // Check if it starts with +962 or 00962 or 07/06/08
    const jordanianPhoneRegex = /^(\+962|00962|0)(7[7-9]|6[0-9]|8[0-9])\d{6}$/;

    if (!jordanianPhoneRegex.test(cleanValue)) {
      return { invalidJordanianPhone: true };
    }

    return null;
  }

  updateDeliveryFee(): void {
    const selectedCity = this.orderForm.get('city')?.value;
    const governorate = this.jordanGovernorates.find((g) => g.name === selectedCity);
    this.deliveryFee = governorate ? governorate.deliveryFee : 0;
  }

  get totalWithDelivery(): number {
    return this.totalPrice + this.deliveryFee;
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      this.showConfirmation = true;
    }
  }

  confirmOrder(): void {
    // Here you would typically send the order to a backend service
    // For now, we'll just clear the cart and show thank you message
    this.cartService.clearCart();
    this.showConfirmation = false;
    this.showThankYou = true;
  }

  cancelOrder(): void {
    this.showConfirmation = false;
  }

  backToCart(): void {
    this.router.navigate(['/cart']);
  }

  continueShopping(): void {
    this.router.navigate(['/']);
  }
}
