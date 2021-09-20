import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateDetails } from '../state';
import { StateService } from '../state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  StateDetailsForm = new FormGroup({
    countryName:new FormControl(''),
  });

  //stateList: StateDetails[] = [];
  public stateList:Observable<StateDetails[]>|any


  countryName: string;
  stateDetails: StateDetails = new StateDetails();

  constructor(private stateService: StateService, private router: Router) { }

  ngOnInit(): void {
    
  }

  getStateList(){
    this.countryName = localStorage.getItem("countryName");

    this.stateService.getStateList(this.countryName).subscribe(data =>
      {
        this.stateList = data;
        console.log(data);
      })

  }

  getStateListOfCountry(){
    this.stateDetails = new StateDetails();
    this.stateDetails.stateName = this.StateDetailsForm.get("stateName")?.value;
    localStorage.setItem("stateName",this.StateDetailsForm.get("stateName")?.value);

    this.router.navigate(['address']);
    
  }



}
