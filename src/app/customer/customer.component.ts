import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from '../address.service';
import { CustomerSignUp } from '../customer';
import { CustomerService } from '../customer.service';
import { OrderDetails } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customers=[];

  CustomerSignUpForm=new FormGroup({
    fullName:new FormControl(''),
    contactNo:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
  });

  orders=[];

  OrdersForm=new FormGroup({
    fullName:new FormControl(''),
    contactNo:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
  });


  customerDetails:CustomerSignUp=new CustomerSignUp()
  
  orderDetails:OrderDetails=new OrderDetails()
  addressId: any;
  
  
  constructor(private customerService:CustomerService,private router:Router, private addressService: AddressService, private orderService: OrderService) { }

  saveCustomerDetails(){
    this.customerDetails=new CustomerSignUp();
    this.customerDetails.fullName=this.CustomerSignUpForm.get('fullName')?.value;
    this.customerDetails.contactNo=this.CustomerSignUpForm.get('contactNo')?.value;
    localStorage.setItem("contactNo",this.CustomerSignUpForm.get('contactNo')?.value);
    this.customerDetails.email=this.CustomerSignUpForm.get('email')?.value;
    this.customerDetails.password=this.CustomerSignUpForm.get('password')?.value;
    localStorage.setItem("password",this.CustomerSignUpForm.get('password')?.value);

    this.customerService.saveCustomerDetails(this.customerDetails).subscribe(data=>console.log(data),error=>console.log(error));
    window.alert("Customer Details added successfully!");

    this.router.navigate(['address']);
  }

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe(res=>{
      this.customers=res;
      console.log(res);
    });
  }

  addOrder(phoneNumber:number){
    this.addressService.getAddressId(phoneNumber).subscribe(data =>{
      this.addressId=data;
      console.log(data);
    
    this.orderDetails=new OrderDetails()
      this.orderService.addOrders(phoneNumber,this.addressId,this.orderDetails ).subscribe(data=>{
        console.log(data);
        window.alert("successful");
        this.router.navigate(['addorder']);
      })
    })
  }

}
