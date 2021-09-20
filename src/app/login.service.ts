import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

 
export class LoginService {
  private profile:any;
  constructor() {}
  public setProfile(profile:any) {
    this.profile = profile;
  }
  public getProfile() {
    return this.profile;
  }

}