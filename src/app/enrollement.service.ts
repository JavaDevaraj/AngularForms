import { User } from './user';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';




@Injectable()
export class EnrollementService {

  _url = "http://localhost:9092/enrollment/save"
  constructor(private _http: HttpClient) { }
  
  enroll(user : User): Observable<User> {
   return  this._http.post<any>(this._url, user).
     pipe(catchError(this.errorHandler));
    
  }
  
  errorHandler(error:HttpErrorResponse){
    console.log("error occurs");
    return ErrorObservable.create(error); //Observable.throw(error.message || "Server Error");
  }
}
