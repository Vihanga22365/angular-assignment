import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DepartmentService } from 'src/app/core/services/department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss'],
})
export class DepartmentFormComponent {
  departmentForm!: FormGroup;

  departmentNameFormControl = new FormControl('', [Validators.required]);
  salaryFormControl = new FormControl('', [Validators.required]);

  addDepartmentSubscription$!: Subscription;

  constructor(private _formBuilder: FormBuilder, private _departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.departmentForm = this._formBuilder.group({
      departmentName: this.departmentNameFormControl,
      salary: this.salaryFormControl,
    });
  }

  submitDepartmentForm() {
    if (this.departmentForm.valid) {
      if (this.departmentNameFormControl.value && this.salaryFormControl.value) {
        const departmentData = {
          departmentId: 'DEP-' + Math.floor(Math.random() * 100000),
          departmentName: this.departmentNameFormControl.value,
          salary: this.salaryFormControl.value,
        };

        this._departmentService.addDepartment(departmentData).subscribe({
          next: (response: any) => {
            if (response.code == 201) {
              this.reset();
              alert('Department added successfully!');
            }
          },
          error: (error) => {
            console.log(error);
          },
        });
      }
    }
  }

  reset() {
    this.departmentForm.reset();
    Object.keys(this.departmentForm.controls).forEach((key) => {
      this.departmentForm.controls[key].setErrors(null);
    });
  }

  ngOnDestroy(): void {
    this.addDepartmentSubscription$?.unsubscribe();
  }
}
