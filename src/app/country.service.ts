import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  getCountryList(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/get-country/');
  }

}
