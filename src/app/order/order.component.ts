import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Orders, OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders= [];
  OrderDetailsForm=new FormGroup({
    totalPrice:new FormControl(''),
    discount:new FormControl(''),
    modeOfPayment:new FormControl(''),
    status:new FormControl(''),
    tracking:new FormControl(''),
  });

  
  message : string;
  constructor(private order:OrderService) { }

  ngOnInit(): void {
    this.order.getOrders().subscribe((res) => {
      this.orders = res;
      console.log('called');
      console.log(res);
      console.log(this.orders);
    }
);
  }

  onSubmit(addOrder:Orders):any{
    console.log(addOrder);
     this.order.addOrder(addOrder).subscribe((data) => {
      this.message=data});
  }

  saveOrderDetails(){
    
  }
}


  


  

