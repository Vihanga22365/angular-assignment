import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DepartmentModel } from 'src/app/core/models/department.model';
import { DepartmentService } from 'src/app/core/services/department.service';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.scss'],
})
export class DepartmentTableComponent implements OnInit {
  getDepartmentListSubscription$!: Subscription;

  departmentList: DepartmentModel[] = [];
  displayedColumns: string[] = ['index', 'departmentId', 'departmentName', 'salary'];
  dataSource = this.departmentList;

  constructor(private _departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.getDepartmentList();
  }

  async getDepartmentList() {
    this.getDepartmentListSubscription$ = await this._departmentService.getDepartmentList().subscribe({
      next: (response: any) => {
        this.dataSource = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.getDepartmentListSubscription$?.unsubscribe();
  }
}
