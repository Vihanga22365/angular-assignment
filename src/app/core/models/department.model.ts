export interface DepartmentModel {
  departmentId?: string;
  departmentName?: string;
  salary?: number;
}

export interface DepartmentApiResponse {
  code: number;
  message: string;
  data: any;
}
