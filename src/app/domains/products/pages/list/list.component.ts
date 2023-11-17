import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent {


  public products = signal([
    {
    image:'https://picsum.photos/640/640',
    title:'Producto 1',
    price: 3000
  },
  {
    image:'https://picsum.photos/640/640',
    title:'Producto 1',
    price: 4000
  },
  {
    image:'https://picsum.photos/640/640',
    title:'Producto 1',
    price: 5000
  },
  {
    image:'https://picsum.photos/640/640',
    title:'Producto 1',
    price: 4000
  },



]) 

}
