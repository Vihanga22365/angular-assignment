import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeModel } from 'src/app/core/models/employee.model';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { employeeType } from 'src/app/core/util/enum/employee-type.enum';
import { genderType } from 'src/app/core/util/enum/gender.enum';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
})
export class EmployeeTableComponent implements OnInit, OnDestroy {
  @Input() employeeListChange!: boolean;

  getEmployeeListSubscription$!: Subscription;
  downloadExcelSubscription$!: Subscription;

  employeeList: EmployeeModel[] = [];
  displayedColumns: string[] = ['index', 'employeeId', 'name', 'department', 'phoneNo', 'employeeType'];
  dataSource = this.employeeList;

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  async getEmployeeList() {
    this.getEmployeeListSubscription$ = await this._employeeService.getEmployeeList().subscribe({
      next: (response: any) => {
        this.dataSource = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getEnumDisplayValue(key: string, value: any): string {
    if (key === 'gender') {
      return this.getGenderTypeDisplay(value);
    }
    if (key === 'employeeType') {
      return this.getEmployeeTypeDisplay(value);
    }
    return '';
  }

  getEmployeeTypeDisplay(type: string): string {
    switch (type) {
      case 'PERMANENT':
        return 'Permanent';
      case 'CONTRACT_BASIS':
        return 'Contract Basis';
      default:
        return 'Unknown';
    }
  }

  getGenderTypeDisplay(gender: string): string {
    switch (gender) {
      case 'MALE':
        return 'Male';
      case 'FEMALE':
        return 'Female';
      case 'OTHER':
        return 'Other';
      default:
        return 'Unknown';
    }
  }

  downloadExcel() {
    this.downloadExcelSubscription$ = this._employeeService.downloadExcel().subscribe({
      next: (response: Blob) => {
        const url = window.URL.createObjectURL(response);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'employees.xlsx';
        link.click();
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.getEmployeeListSubscription$?.unsubscribe();
  }
}
