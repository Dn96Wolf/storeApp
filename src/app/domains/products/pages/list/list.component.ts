import { ProductComponent } from '@products/components/product/product.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductService } from '@shared/services/product.service';
import { CartService } from '@shared/services/cart.service';
import { APIProduct } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent implements OnInit {

  public page = 1;
  public size = 10;
  public total = 35;
  public products = signal<APIProduct[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService)
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (response: APIProduct[]) => {
        this.products.set(response)
      },
      error: () => {

      }
    })
  }



  public item(newProduct: APIProduct): void {
    this.cartService.addToCart(newProduct)
  }



}
