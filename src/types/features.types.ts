export interface IFeaturesProps {
  _id?: string;
  websiteName: string;
  logo: string;
  description: string;
  phoneNumberOne: string;
  phoneNumberTwo: string;
  instagramLink: string;
  facebookLink: string;
  shopAddress: string;
}

export interface IContactFormProps {
  _id?: string;
  name: string;
  phoneNumber: string;
  email?: string;
  message: string;
}
