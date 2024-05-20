interface ContactInformation {
  email: string;
  phone: string;
  address: string;
  website: string;
}

export interface Business {
  userId: string;
  businessId: string;
  name: string;
  categories: string[];
  imagesUrls: string[];
  description: string;
  contactInfo: ContactInformation;
}

export interface BusniessFormData {
  name: string;
  categories: string[];
  imageUrls?: string[];
  description: string[];
  contactInfo: ContactInformation;
}

export interface BusniessEditFormData extends BusniessFormData {
  id: string;
}
