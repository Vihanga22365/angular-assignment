import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentSalaryChartComponent } from './department-salary-chart.component';

describe('DepartmentSalaryChartComponent', () => {
  let component: DepartmentSalaryChartComponent;
  let fixture: ComponentFixture<DepartmentSalaryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentSalaryChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentSalaryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
