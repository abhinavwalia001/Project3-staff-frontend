import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerSignUp } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerregister',
  templateUrl: './customerregister.component.html',
  styleUrls: ['./customerregister.component.css']
})
export class CustomerregisterComponent implements OnInit {


  
  CustomerSignUpForm=new FormGroup({
    name:new FormControl(''),
    phoneNumber:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
   
  });
  customerDetails:CustomerSignUp=new CustomerSignUp()
  constructor(private customerService:CustomerService,private router:Router) { }
  saveCustomerDetails(){
   
    this.customerService.saveCustomerDetails(this.CustomerSignUpForm).subscribe(data=>console.log(data),error=>console.log(error));
    window.alert("Customer Details added successfully!");

   // this.router.navigate(['address']);
  }
  ngOnInit(): void {
  }

}
