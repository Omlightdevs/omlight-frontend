import axios from "axios";
import Config from "../config";
import { ILightProps, IResponseProps } from "../types";

class LightController {
  public async getAllLights() {
    try {
      const lights = await axios.get<IResponseProps>(
        `${Config.SERVER_URL}/lights`
      );
      return lights.data.data;
    } catch (err: any) {
      console.log(err.message);
      return err.message;
    }
  }
  public async getLightsByCategory(categoryId: string) {
    try {
      //  console.log("ID FOUND!", categoryId);
      const id = await axios.get<IResponseProps>(
        `${Config.SERVER_URL}/lights/${categoryId}`
      );
      return id.data.data;
    } catch (err: any) {
      return err.response.message;
    }
  }

  public async getLightById(lightId: string) {
    try {
      const id = await axios.get<IResponseProps>(
        `${Config.SERVER_URL}/light/${lightId}`
      );
      return id.data.data;
    } catch (err: any) {
      return err.response.message;
    }
  }

  public async updateLightsByIs(id: string, data: ILightProps) {
    try {
      const dataId = await axios.put<IResponseProps>(
        `${Config.SERVER_URL}/update-light/${id}`,
        data
      );
      return dataId.data.data;
    } catch (err) {
      return err;
    }
  }

  public async createNewLights(data: ILightProps) {
    try {
      const dataLight = await axios.post<IResponseProps>(
        `${Config.SERVER_URL}/create-lights`,
        data
      );
      return dataLight.data.data;
    } catch (err) {
      return err;
    }
  }

  public async DelteLightById(id: string) {
    try {
      const dataId = await axios.delete<IResponseProps>(
        `${Config.SERVER_URL}/delete-light/${id}`
      );
      return dataId.data.data;
    } catch (err) {
      return err;
    }
  }
}

export default new LightController();
