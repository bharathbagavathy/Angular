import { Product } from "./Product";

export class ProductService{
    public getProducts(){
       let products:Product[]
        products=[
            new Product(1, 'SD Card',500),
            new Product(2, 'Headphones',600),
            new Product(3, 'Laptop',40000)
        ]
        return products;
    }
}