import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EmployeeModel } from 'src/app/core/models/employee.model';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { getKeyByValue } from 'src/app/core/util/const/getValueFromKey.const';
import { employeeType } from 'src/app/core/util/enum/employee-type.enum';
import { genderType } from 'src/app/core/util/enum/gender.enum';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit, OnDestroy {
  @Input() employeeListChange!: boolean;

  nameFormControl = new FormControl('', [Validators.required]);
  departmentFormControl = new FormControl('', [Validators.required]);
  phoneNoFormControl = new FormControl('', [Validators.required]);
  addressFormControl = new FormControl('', [Validators.required]);
  genderFormControl = new FormControl('', [Validators.required]);
  empTypeFormControl = new FormControl('', [Validators.required]);

  name!: string;
  department!: string;
  phoneNo!: string;
  address!: string;
  gender!: genderType;
  employeeType!: employeeType;

  genders = Object.values(genderType);
  empTypes = Object.values(employeeType);

  employeeForm!: FormGroup;

  addEmployeeSubscription$!: Subscription;

  constructor(private _formBuilder: FormBuilder, private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeForm = this._formBuilder.group({
      name: this.nameFormControl,
      department: this.departmentFormControl,
      phoneNo: this.phoneNoFormControl,
      address: this.addressFormControl,
      gender: this.genderFormControl,
      employeeType: this.empTypeFormControl,
    });
  }

  submitEmployeeForm(): void {
    if (this.employeeForm.valid) {
      if (
        this.nameFormControl.value &&
        this.departmentFormControl.value &&
        this.phoneNoFormControl.value &&
        this.addressFormControl.value &&
        this.genderFormControl.value &&
        this.empTypeFormControl.value
      ) {
        const employeeData: EmployeeModel = {
          employeeId: 'EMP-' + Math.floor(Math.random() * 100000),
          name: this.nameFormControl.value,
          department: this.departmentFormControl.value,
          phoneNo: this.phoneNoFormControl.value,
          address: this.addressFormControl.value,
          gender: getKeyByValue(genderType, this.genderFormControl.value),
          employeeType: getKeyByValue(employeeType, this.empTypeFormControl.value),
        };

        this.addEmployeeSubscription$ = this._employeeService.addEmployee(employeeData).subscribe({
          next: (response) => {
            if (response.code == 201) {
              this.reset();
              alert('Employee added successfully!');
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
    this.employeeForm.reset();
    Object.keys(this.employeeForm.controls).forEach((key) => {
      this.employeeForm.controls[key].setErrors(null);
    });
  }

  ngOnDestroy(): void {
    this.addEmployeeSubscription$?.unsubscribe();
  }
}
