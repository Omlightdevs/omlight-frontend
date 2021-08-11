import React from "react";

import { DefaultLayout } from "../../../layout";
import {
  Typography,
  Box,
  Container,
  makeStyles,
  Theme,
  TextField,
} from "@material-ui/core";
import { ButtonComponent } from "../../../component";
import Helmet from "react-helmet";
import { Formik } from "formik";
import * as yup from "yup";
import { IContactFormProps, IFeaturesProps } from "../../../types";
import featuresServices from "../../../services/features.services";

const initialValues: IContactFormProps = {
  name: "",
  phoneNumber: "",
  email: "",
  message: "",
};

const validationObject = yup.object().shape({
  name: yup.string().required("Your name required"),
  phoneNumber: yup.string().required("Please add your contact number"),
  email: yup.string().email(),
  message: yup.string().required("Please write a message atleast..."),
});

export const ContactPage = () => {
  const styles = useStyles();
  const [success, setSuccess] = React.useState("");
  const [details, setDeatils] = React.useState<IFeaturesProps[]>();

  const handleContactSubmit = async (e: any) => {
    const message = await featuresServices.contactForm(e);
    setSuccess(message);
  };

  React.useEffect(() => {
    (async () => {
      const data = await featuresServices.getAllDetails();
      setDeatils(data);
    })();
  }, []);
  return (
    <DefaultLayout
      link={[
        { linkName: "Home", path: "/" },
        { linkName: "About", path: "/about" },
        { linkName: "Contact", path: "/contact" },
      ]}
    >
      <Helmet>
        <title>om lights - contact us</title>
      </Helmet>
      <Container>
        <Box
          height="100%"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          my={5}
        >
          <Box
            p={3}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            flexWrap="wrap"
            flex={1}
            boxShadow="3"
          >
            {details?.map(({ phoneNumberOne, phoneNumberTwo, shopAddress }) => (
              <Box flex={1}>
                <Typography
                  variant="h3"
                  className={styles.title}
                  color="primary"
                >
                  Let's Keep In Touch
                </Typography>
                <Box mt={5}>
                  <Typography variant="h6" color="primary">
                    Email address
                  </Typography>

                  <Typography variant="body1">Omlit2021@gmail.com</Typography>
                </Box>
                <Box my={2}>
                  <Typography variant="h6" color="primary">
                    Contact Number
                  </Typography>
                  <Typography variant="body1">
                    Contact - {phoneNumberOne}
                  </Typography>
                  <Typography variant="body1">
                    Contact - {phoneNumberTwo}
                  </Typography>
                </Box>
                <Box my={2}>
                  <Typography variant="h6" color="primary">
                    Physical Address
                  </Typography>
                  <Typography variant="body1">
                    <address>{shopAddress}</address>
                  </Typography>
                </Box>
              </Box>
            ))}
            <Box flex={1}>
              <Typography variant="h3" className={styles.title} color="primary">
                Contact us we will reach you soon!
              </Typography>
              <Box>
                <Box my={3}>
                  {success && (
                    <Typography variant="body1">{success}</Typography>
                  )}
                </Box>
                <Formik
                  onSubmit={handleContactSubmit}
                  validationSchema={validationObject}
                  initialValues={initialValues}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    errors,
                    touched,
                    values,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <Box>
                        <TextField
                          type="text"
                          label="What is your name? (required)"
                          variant="outlined"
                          fullWidth
                          name="name"
                          id="name"
                          classes={{ root: styles.appTextInput }}
                          value={values.name}
                          onChange={handleChange("name")}
                          onBlur={handleBlur("name")}
                          helperText={touched.name && errors.name}
                          error={false && Boolean(errors.name)}
                        />
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        mt={2}
                      >
                        <Box flex={1} mr={1}>
                          <TextField
                            variant="outlined"
                            label="Contact (required)"
                            color="primary"
                            name="contact"
                            id="contact"
                            classes={{ root: styles.appTextInput }}
                            value={values.phoneNumber}
                            onChange={handleChange("phoneNumber")}
                            onBlur={handleBlur("phoneNumber")}
                            helperText={
                              touched.phoneNumber && errors.phoneNumber
                            }
                            error={false && Boolean(errors.phoneNumber)}
                            fullWidth
                          />
                        </Box>
                        <Box flex={1} ml={1}>
                          <TextField
                            variant="outlined"
                            label="email (optional)"
                            color="primary"
                            classes={{ root: styles.appTextInput }}
                            value={values.email}
                            onChange={handleChange("email")}
                            onBlur={handleBlur("email")}
                            helperText={touched.email && errors.email}
                            error={false && Boolean(errors.email)}
                            fullWidth
                          />
                        </Box>
                      </Box>
                      <Box mt={2}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Message (required)"
                          color="primary"
                          classes={{ root: styles.appTextInput }}
                          multiline
                          rows={5}
                          rowsMax={5}
                          value={values.message}
                          onChange={handleChange("message")}
                          onBlur={handleBlur("message")}
                          helperText={touched.message && errors.message}
                          error={false && Boolean(errors.message)}
                        />
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-end"
                        mt={2}
                      >
                        <ButtonComponent
                          color="primary"
                          variant="contained"
                          type="submit"
                        >
                          Send message
                        </ButtonComponent>
                      </Box>
                    </form>
                  )}
                </Formik>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </DefaultLayout>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontWeight: 700,
  },
  lightLamp: {
    marginTop: theme.spacing(3),
    marginLeft: "-70px",
  },
  appTextInput: {
    background: "#fff",
    border: `1px solid #000`,
  },
}));
