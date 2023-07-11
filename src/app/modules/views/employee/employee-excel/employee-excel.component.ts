import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-employee-excel',
  templateUrl: './employee-excel.component.html',
  styleUrls: ['./employee-excel.component.scss'],
})
export class EmployeeExcelComponent {
  selectedFile: File | null = null;

  constructor(private _employeeService: EmployeeService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);

      this._employeeService.uploadExcel(formData).subscribe({
        next: (response) => {
          // console.log(response);
          if (response.code === 201) {
            alert(response.message);
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
