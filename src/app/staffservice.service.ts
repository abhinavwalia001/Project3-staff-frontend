import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StaffserviceService {
  readonly baseUrl = 'http://localhost:8586/api/';
  headers = new HttpHeaders().append('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) {}
 

  public login(email: string, password: string): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'staff/login', null, {
      params: new HttpParams()
        .append('email', email)
        .append('password', password)
    });
  }

 
  }
