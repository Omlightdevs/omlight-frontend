export interface IFeaturesProps {
  websiteName: string;
  websiteLogo: string;
  description: string;
  contact: {
    type: string;
    name: string;
    details: string;
  }[];
  shopAddress: string;
  brands: {
    title: string;
  }[];
}

export interface IContactFormProps {
  _id?: string;
  name: string;
  phoneNumber: string;
  email?: string;
  message: string;
}
