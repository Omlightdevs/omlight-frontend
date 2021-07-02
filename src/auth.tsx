import React from "react";
import { useHistory } from "react-router-dom";

export const Auth: React.FunctionComponent = ({ children }) => {
     const token = localStorage.getItem("Token");
     const history = useHistory();
     if (!token) {
          history.push("/");
     }
     return <div>{children}</div>;
};
