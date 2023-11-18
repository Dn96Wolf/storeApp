import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component';

export interface Product {
  image: string,
  title: string,
  price: number
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent {

  public page = 1;
  public size = 10;
  public total = 35;


  public products = signal<Product[]>([
    {
      image: 'https://picsum.photos/640/640',
      title: 'Producto 1',
      price: 3000
    },
    {
      image: 'https://picsum.photos/640/640',
      title: 'Producto 1',
      price: 4000
    },
    {
      image: 'https://picsum.photos/640/640',
      title: 'Producto 1',
      price: 5000
    },
    {
      image: 'https://picsum.photos/640/640',
      title: 'Producto 1',
      price: 4000
    },
  ])


  public item(e:string):void{
    console.log('Aver aver aver',e)
  }

}
