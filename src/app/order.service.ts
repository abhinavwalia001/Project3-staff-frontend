import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'https://pos-staff.herokuapp.com/api/';

   private dummyUrl= 'http://localhost:8586/api/';

  constructor(private httpService: HttpClient) { }

public addOrder(addOrder: Orders  ) {
  console.log("ins service add");
  console.log(addOrder);
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.post(this.baseUrl+"add-order//{addressId}", addOrder,  { headers, responseType: 'text'});
}

  public getOrders(): Observable<any> {
    return this.httpService.get(this.baseUrl + 'get-orders');
  }

  public getOrder(orderId): Observable<any> {
    return this.httpService.get(this.baseUrl + 'order/' + orderId);
  } 


  public addOrders(phoneNumber:any,addressId:any, order:object){

    return this.httpService.post(`${this.dummyUrl}/add-order/${phoneNumber}/${addressId}`,order);

  }

}
export class Orders {
  id: number ;
  date: string;
  discount: number;
  payment_mode:string;
  status: string;
  total_price:number;
  tracking : number;
}