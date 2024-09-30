import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url: string = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.url, { observe: 'body' }).pipe(
      map((response: Employee[]) => {
        return response.map((emp: Employee) => {
          return new Employee(emp.id, emp.firstName, emp.lastName, emp.sal, emp.email);
        });
      })
    );

    // return this.httpClient.get<Employee[]>(this.url);
  }
}
