import { Injectable, computed, signal } from '@angular/core';
import { APIProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  public cart = signal<APIProduct[]>([])
  public total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0)
  })

  constructor() { }

  public addToCart(product: APIProduct): void {
    this.cart.update((lastState) => [...lastState, product])
  }


}
