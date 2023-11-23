import { HighligthDirective } from '@shared/directives/highligth.directive';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { APIProduct } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe, HighligthDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() public info: APIProduct = {
    id: 0,
    images: [],
    title: '',
    price: 0,
    category: '',
    description: '',
  };

  @Input() data: { page: number; size: number; total: number } = {
    page: 1,
    size: 10,
    total: 0,
  };
  @Output() addCart = new EventEmitter<APIProduct>();

  public addToCartHandler(product: APIProduct) {
    this.addCart.emit(product);
  }
}
