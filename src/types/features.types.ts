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
  shopImagesOne: string;
  shopImagesTwo: string;
  shopImagesThree: string;
  shopImagesFour: string;
  shopImagesFive: string;
}

export interface IContactFormProps {
  _id?: string;
  name: string;
  phoneNumber: string;
  email?: string;
  message: string;
}
