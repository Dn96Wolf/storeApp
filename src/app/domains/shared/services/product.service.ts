import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { APIProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService  {

  private http = inject(HttpClient);

  private url:string = 'https://api.escuelajs.co/api/v1/products';

  constructor() { }


public getProducts():Observable<APIProduct[]>{


  return this.http.get<APIProduct[]>(`${this.url}`)
}



}
