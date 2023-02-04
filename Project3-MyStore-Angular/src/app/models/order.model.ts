import { Product } from './product/product.model'

export class Order { 
    id?: number;
    fullName!: string;
    totalPrice!: number;
    address!: string;
    creditCard!: string;
  
    constructor(id:number , fullName: string, price: number, address:string, creditCard:string){
      this.id = id ;
      this.fullName = fullName ;
      this.totalPrice = price ;
      this.address = address ;
      this.creditCard = creditCard ;
  }
  }
  