import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerAddressDetails } from '../address';
import { AddressService } from '../address.service';
import { CustomerSignUp } from '../customer';
import { CustomerService } from '../customer.service';
import { StateDetails } from '../state';
import { StateService } from '../state.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  CustomerAddressForm=new FormGroup({
    addressLine:new FormControl(''),
    city:new FormControl(''),
    pinCode:new FormControl(''),
  });

  customerDetails:CustomerAddressDetails=new CustomerAddressDetails()

  stateName: string;
  phoneNumber: string;
  stateId: any;

  constructor(private customerService:CustomerService,private stateService: StateService,private addressService: AddressService,private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.stateName = localStorage.getItem("stateName");
    console.log(this.stateName);
    this.stateId = this.stateService.getStateIdByName(this.stateName);
    console.log(this.stateId);

    this.phoneNumber = localStorage.getItem("phoneNumber");

    this.customerDetails = new CustomerAddressDetails();

    this.customerDetails.addressLine=this.CustomerAddressForm.get('addressLine')?.value;
    this.customerDetails.city=this.CustomerAddressForm.get('city')?.value;
    this.customerDetails.pinCode=this.CustomerAddressForm.get('pinCode')?.value;

    this.addressService.saveAddressOfCustomer(this.phoneNumber,this.stateId,this.customerDetails).subscribe(data =>{
      console.log(data);

      window.alert("Address details added successfully!");

      this.router.navigate(['staffdashboard']);
    })
  }







}
