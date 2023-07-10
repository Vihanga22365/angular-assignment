import { employeeType } from '../util/enum/employee-type.enum';
import { genderType } from '../util/enum/gender.enum';

export interface EmployeeModel {
  employeeId?: string;
  name?: string;
  department?: string;
  phoneNo?: string;
  address?: string;
  gender?: string;
  employeeType?: string;
}

export interface EmployeeApiResponse {
  code: number;
  message: string;
  data: any;
}
