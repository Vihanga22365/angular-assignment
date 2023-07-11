import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './modules/views/employee/employee.component';
import { DepartmentComponent } from './modules/views/department/department.component';
import { DepartmentSalaryChartComponent } from './modules/views/department-salary-chart/department-salary-chart.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'department',
    component: DepartmentComponent,
  },
  {
    path: 'department-salary',
    component: DepartmentSalaryChartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
