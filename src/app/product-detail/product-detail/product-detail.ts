import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product, Color } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  product: Product | null = null;
  selectedImageIndex = 0;
  selectedColor: Color | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id) || null;
    if (this.product && this.product.availableColors.length > 0) {
      this.selectedColor = this.product.availableColors[0];
    }
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  selectColor(color: Color): void {
    this.selectedColor = color;
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product, 1, this.selectedColor || undefined);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
