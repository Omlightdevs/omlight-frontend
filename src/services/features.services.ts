import axios from "axios"
import Config from "../config"
import { IFeaturesProps } from "../types"

class FeatureController {
    public async uploadingAllDetails(data:IFeaturesProps) {
        try {
            const details = await axios.post(`${Config.SERVER_URL}/contact-details`,data)
            return details.data.data
        } catch (err) {
            return err.message
         }
     }
}

export default new FeatureController()