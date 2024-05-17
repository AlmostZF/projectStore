export interface UserLogin {
  email: string;
  password: string;
}
export interface UserSignUp {
  email: string;
  name: string;
  password: string;
}
export interface LoginResponse {
  success: boolean;
  message: string;
  data?: any;
}
