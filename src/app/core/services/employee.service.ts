import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeApiResponse, EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  getEmployeeListSubscription$!: Subscription;

  constructor(private http: HttpClient) {}

  getEmployeeList() {
    return this.http.get(environment.employeeBaseUrl);
  }

  addEmployee(employeeData: EmployeeModel) {
    return this.http.post<EmployeeApiResponse>(environment.employeeBaseUrl, employeeData);
  }

  downloadExcel() {
    return this.http.get(environment.reportBaseUrl + '/export', { responseType: 'blob' });
  }
}
