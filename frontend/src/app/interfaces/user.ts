export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  password_confirmation: string;
  type: string;
  status: number;
}
