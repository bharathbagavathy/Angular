import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductService } from './ProductService';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing';

  readonly ROOT_URL='https://jsonplaceholder.typicode.com';
  posts:any;

  movie : movies[] =[
    {title:'Zootopia',director:'Byron Howard'},
    {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder'}
  ]
  num:number=0;

  items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, 
    {name: 'Three', val: 3}, {name: 'Four', val: 4}, {name: 'Five', val: 5}];
    selectedValue: string= 'One';

  showme:boolean=true;
  show:boolean=false;

  products:Product[]=[]
  
  constructor(private productService:ProductService, private http:HttpClient){}
  getProducts(){
    this.products=this.productService.getProducts();
  }

  getPosts(){
    this.posts=this.http.get(this.ROOT_URL+'/posts');
  }

  onCreatePosts(){

  }
}

class movies{
  title:string='';
  director:string='';
}
class item{
  name:string='';
  val:number=0;
}