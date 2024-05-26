import { Business } from "./business";
import { User } from "./user";

export interface LoginParams {
  email: string;
  password: string;
}

export interface AuthParams {
  email: string;
  password: string;
}

export interface UserAuth {
  user: User;
  token: string;
};

export interface BusinessAuth {
  business: Business;
  token: string;
}