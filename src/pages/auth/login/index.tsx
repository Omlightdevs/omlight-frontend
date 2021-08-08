import React from "react";

import { Box, Typography, TextField } from "@material-ui/core";
import { ButtonComponent } from "../../../component";
import { Link, useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import authServices from "../../../services/auth.services";
import { DefaultLayout } from "../../../layout";

interface userProps {
  email: string;
  password: string;
}

const initialValues: userProps = {
  email: "",
  password: "",
};

const validationObject = yup.object().shape({
  email: yup.string().email().required("Enter your email first and try again"),
  password: yup.string().required("Enter your password"),
});

export const LoginAuth = () => {
  //  const [error, setError] = React.useState("");
  const history = useHistory();
  const authFormHandler = async (e: any) => {
    try {
      const user = await authServices.loginAdmin({
        email: e.email,
        password: e.password,
      });
      console.log(user);
      history.push("/admin/dashboard");
    } catch (err: any) {
      return err.message;
    }
  };
  return (
    <DefaultLayout logo="Om lights" link={[{ linkName: "Home", path: "/" }]}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationObject}
          onSubmit={authFormHandler}
        >
          {({
            handleBlur,
            handleSubmit,
            handleChange,
            touched,
            errors,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box width="60vh" bgcolor="#fff" borderRadius={5} p={3}>
                <Box mb={3}>
                  <Typography color="primary" align="center" variant="h4">
                    Login with your crendtials
                  </Typography>
                  {/* {error && (
                                                  <Box
                                                       my={3}
                                                       display="flex"
                                                       justifyContent="center"
                                                       alignItems="center"
                                                  >
                                                       <Typography
                                                            align="center"
                                                            variant="caption"
                                                            style={{
                                                                 color: "red",
                                                            }}
                                                       >
                                                            {error}
                                                       </Typography>
                                                  </Box>
                                             )} */}
                </Box>
                <TextField
                  label="Enter your email"
                  type="email"
                  variant="outlined"
                  color="primary"
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  error={false && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  fullWidth
                />
                <Box mt={3}>
                  <TextField
                    label="Enter your password"
                    type="password"
                    variant="outlined"
                    color="primary"
                    onChange={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    error={false && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    fullWidth
                  />
                </Box>
                <Box mt={3}>
                  <ButtonComponent
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    <Typography>Signin</Typography>
                  </ButtonComponent>
                  <Box mt={3}>
                    <Typography variant="h6" align="center">
                      <Link to="/forgot-password">forgot your password?</Link>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </DefaultLayout>
  );
};
