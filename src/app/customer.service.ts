import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerSignUp } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl="https://pos-staff.herokuapp.com/api/";

  constructor(private httpClient:HttpClient) { }

  public saveCustomerDetails(customer:object):Observable<object>{
    return this.httpClient.post('http://localhost:8586/api/add-customer', customer); 
  }
  getCustomer():Observable<any>{
    return this.httpClient.get(this.baseUrl+'customers');
  }

}
