import axios from "axios";

import Config from "../config";
import { IResponseProps, IUserProps } from "../types";

class AuthService {
     public async loginAdmin(user: IUserProps) {
          const data = await axios.post<IResponseProps>(
               `${Config.SERVER_URL}/sign-in`,
               {
                    email: user.email,
                    password: user.password,
               }
          );
          localStorage.setItem("Token", data.data.data.token);
     }
}

export default new AuthService();
