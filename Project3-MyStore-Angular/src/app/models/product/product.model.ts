export class Product { 
  id?: number;
  title?: string;
  price?: number;
  image?: string;
  description?: string;
  amount?: number;


  constructor(id:number , title: string, price: number, image:string, description:string,amount: number){
    this.id = id ;
    this.title = title ;
    this.price = price ;
    this.image = image ;
    this.description = description ;
    this.amount = amount ;

}
}
