import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl='http://localhost:8586/api/'

  constructor(private httpClient: HttpClient) { }

  saveAddressOfCustomer(phoneNumber: any, stateId:any,addressDetails:object):Observable<any>  {
    return this.httpClient.post(`${this.baseUrl}`+'/address/'+`${phoneNumber}`+'/course/'+`${stateId}`+'/',addressDetails);
  }


  getAddressId(phoneNumber: any):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}`+'/get-address/'+`${phoneNumber}`);

  }
}
