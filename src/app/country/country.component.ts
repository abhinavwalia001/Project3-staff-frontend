import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryDetails } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  CountryDetailsForm = new FormGroup({
    countryName:new FormControl(''),
  });

  countryList: CountryDetails[] = [];

  countryDetails:CountryDetails=new CountryDetails()

  constructor(private countryService:CountryService, private router:Router) { }

  ngOnInit(): void {

    this.countryService.getCountryList().subscribe(data => {
      this.countryList = data;
    })
  }

  getStates(){
    this.countryDetails = new CountryDetails();
    
    this.countryDetails.countryName=this.CountryDetailsForm.get('countryName')?.value;
    
    localStorage.setItem("countryName",this.CountryDetailsForm.get('countryName')?.value);
    
    this.router.navigate(['states']);

  }

}
