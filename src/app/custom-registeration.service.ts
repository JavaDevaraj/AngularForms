import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomRegisterationService {

  constructor(private http: HttpClient) { }
  _url = "http://localhost:9092/customUser/save"
  
  register(userData) : Observable<any>{
   return this.http.post<any>(this._url, userData);
  }

}
