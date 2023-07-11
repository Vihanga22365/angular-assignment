import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './modules/shared/header/header.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { EmployeeComponent } from './modules/views/employee/employee.component';
import { EmployeeFormComponent } from './modules/views/employee/employee-form/employee-form.component';
import { EmployeeTableComponent } from './modules/views/employee/employee-table/employee-table.component';
import { DepartmentComponent } from './modules/views/department/department.component';
import { DepartmentFormComponent } from './modules/views/department/department-form/department-form.component';
import { DepartmentTableComponent } from './modules/views/department/department-table/department-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeExcelComponent } from './modules/views/employee/employee-excel/employee-excel.component';
import { DepartmentSalaryChartComponent } from './modules/views/department-salary-chart/department-salary-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeTableComponent,
    DepartmentComponent,
    DepartmentFormComponent,
    DepartmentTableComponent,
    EmployeeExcelComponent,
    DepartmentSalaryChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
