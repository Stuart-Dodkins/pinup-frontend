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
