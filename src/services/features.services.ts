import axios from "axios";
import Config from "../config";
import { IContactFormProps, IFeaturesProps } from "../types";

class FeatureController {
  public async uploadingAllDetails(data: IFeaturesProps) {
    try {
      const details = await axios.post(
        `${Config.SERVER_URL}/contact-details`,
        data
      );
      return details.data.data;
    } catch (err) {
      return err.message;
    }
  }
  public async getAllDetails() {
    try {
      const data = await axios.get(`${Config.SERVER_URL}/get-contact-details`);
      return data.data.data;
    } catch (err) {
      return err.message;
    }
  }
  public async contactForm(data: IContactFormProps) {
    try {
      const formData = await axios.post(`${Config.SERVER_URL}/contact`, data);
      return formData.data.data.message;
    } catch (err) {
      return err.message;
    }
  }
  public async getCustomer() {
    try {
      const data = await axios.get(`${Config.SERVER_URL}/contact`);
      return data.data.data;
    } catch (err) {
      return err.message;
    }
  }
  public async deleteContactDetails(_id: string) {
    try {
      const data = await axios.delete(
        `${Config.SERVER_URL}/delete-contact-details/${_id}`
      );
      return data.data.data;
    } catch (err) {
      return err.message;
    }
  }
}

export default new FeatureController();
