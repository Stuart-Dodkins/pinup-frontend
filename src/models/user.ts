
export interface UserContactInfo {
  email: string;
  phone?: string;
  address: string;
}

export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  contactInfo: UserContactInfo;
}

export interface UserFormData {
  userId: string;
  firstName: string;
  lastName: string;
  contactInfo: UserContactInfo;
}

export interface UserEditFormData extends UserFormData {
  id: string;
}
