import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DepartmentApiResponse } from '../models/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private _httpClient: HttpClient) {}

  getDepartmentList() {
    return this._httpClient.get(environment.departmentBaseUrl);
  }

  addDepartment(department: any) {
    return this._httpClient.post<DepartmentApiResponse>(environment.departmentBaseUrl, department);
  }
}
