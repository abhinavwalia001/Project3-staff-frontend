import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private baseUrl = 'http://localhost:8080/api/state';

  constructor(private httpClient: HttpClient) { }

  getStateList(countryName: string):Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`+'/getStateList/'+`${countryName}`);
  }
  

  getStateIdByName(stateName: string):Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`+'/getStateIdByName/'+`${stateName}`)
  }

}
