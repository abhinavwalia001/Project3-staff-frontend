import { Component, OnInit } from '@angular/core';


import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {StaffserviceService } from '../staffservice.service';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formData = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  // public error;
  constructor(
    private staffService: StaffserviceService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {}
  login(data:any) {
    this.staffService.login(data.email, data.password).subscribe(res => {
      console.log(res);
      if (res != null) {
        this.loginService.setProfile(res);
        this.router.navigate(['/staffdashboard']);
        //alert("validation success");
      } else {
        alert("invalid email/ password");
      }
    });

  }
}
