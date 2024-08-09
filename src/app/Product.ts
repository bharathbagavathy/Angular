export class Product{
    ProductId:number=0;
    ProductName:string='';
    Price:number=0;
    constructor(productId:number,productName:string,price:number) {
       this.ProductId=productId;
       this.Price=price;
       this.ProductName=productName;
    }
}