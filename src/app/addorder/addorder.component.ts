import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService:ProductService, private router:Router) {

   }

  ngOnInit(): void {
    
  this.productService.productlist().subscribe(data=>{
    this.products = data;
    console.log(data);
    console.log(this.products);
  })
}

}

