import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../pages/list/list.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent {

  @Input() public info: Product = {
    image: '',
    title: '',
    price: 0
  };

  @Input() data: { page: number, size: number, total: number } = { page: 1, size: 10, total: 0 };

  @Output() addCart = new EventEmitter<string>();


  public addToCartHandler(titleProduct:string) {
    this.addCart.emit(titleProduct)
  }

}
