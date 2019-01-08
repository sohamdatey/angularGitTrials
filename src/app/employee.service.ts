import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emp } from './emp';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient ) { }
  _url="https://jsonplaceholder.typicode.com/posts";
  getEmployees() :Observable<Emp[]>
  {
    return this.http.get<Emp[]>(this._url);
  }
}
