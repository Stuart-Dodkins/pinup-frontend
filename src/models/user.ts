import { Base } from './base';

export interface User extends Base {
  email: string;
  location?: string; //Can change this later
}

export interface UserFormData {
  email: string;
  password: string;
}

export interface UserEditFormData extends UserFormData {
  id: string;
}
