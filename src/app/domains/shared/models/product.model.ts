export interface Product {
  id: number,
  title: string,
  price: number,
  image: string,
  createdAt:string,
}


export interface APIProduct{
  id:number,
  title:string,
  price:number,
  images:string[],
  description:string,
  category:string
}
