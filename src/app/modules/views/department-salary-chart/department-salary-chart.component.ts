import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { Subscription } from 'rxjs';
import { DepartmentModel } from 'src/app/core/models/department.model';
import { DepartmentService } from 'src/app/core/services/department.service';

@Component({
  selector: 'app-department-salary-chart',
  templateUrl: './department-salary-chart.component.html',
  styleUrls: ['./department-salary-chart.component.scss'],
})
export class DepartmentSalaryChartComponent implements OnInit {
  getDepartmentListSubscription$!: Subscription;

  departmentList: DepartmentModel[] = [];

  constructor(private _departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.getDepartmentList();
    setTimeout(() => {
      this.createrChart();
    }, 2000);
  }

  getDepartmentList() {
    this.getDepartmentListSubscription$ = this._departmentService.getDepartmentList().subscribe({
      next: (response: any) => {
        this.departmentList = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  createrChart() {
    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      xAxis: {
        type: 'category',
        data: this.departmentList.map((department) => department.departmentName),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.departmentList.map((department) => department.salary),
          type: 'line',
        },
      ],
    };

    option && myChart.setOption(option);
  }

  ngOnDestroy(): void {
    this.getDepartmentListSubscription$?.unsubscribe();
  }
}
