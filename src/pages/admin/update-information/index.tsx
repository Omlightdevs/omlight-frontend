import React from "react";

import { Box, TextField, Typography, useTheme } from "@material-ui/core";
import { IFeaturesProps } from "../../../types";
import { Formik } from "formik";
import * as yup from "yup";
import { AdminNavs } from "../../../layout";
import { useHistory, useParams } from "react-router-dom";
import featuresServices from "../../../services/features.services";
import { ButtonComponent, Title } from "../../../component";

interface Params {
  id: string;
}

interface IResponse {
  message: string;
}

const validationSchema = yup.object().shape({
  description: yup
    .string()
    .required("Description is requried for describe yourself to the website"),
  facebookLink: yup.string().required("Facebook link is required"),
  instagramLink: yup.string().required("Instagram link is required"),
  logo: yup.string().required("Logo is main for your website"),
  websiteName: yup.string().required("Website name is important"),
  phoneNumberOne: yup.string().required("Phone number is required"),
  phoneNumberTwo: yup.string().required("Phone number is required"),
});

export const UpdateInfo = () => {
  const params = useParams<Params>();
  const { palette } = useTheme();
  const history = useHistory();
  const [info, setInfo] = React.useState<IFeaturesProps>();
  const [message, setMessage] = React.useState<IResponse>();

  React.useEffect(() => {
    (async () => {
      const information = await featuresServices.getWebsteDetailsById(
        params.id
      );
      setInfo(information);
    })();
  }, []);

  const initialValues = {
    description: info?.description,
    facebookLink: info?.facebookLink,
    instagramLink: info?.instagramLink,
    logo: info?.logo,
    phoneNumberOne: info?.phoneNumberOne,
    phoneNumberTwo: info?.phoneNumberTwo,
    websiteName: info?.websiteName,
    shopAddress: info?.shopAddress,
  };

  const onSubmitted = async (e: any) => {
    const finalUpdate = await featuresServices.updatingWebsiteDetails(
      params.id,
      e
    );
    setMessage(finalUpdate);
    history.push("/admin/website-information");
  };
  return (
    <AdminNavs>
      <Title
        label={`Managing your website details`}
        buttonName="Cancel"
        path="/admin/website-information"
      />
      {message && <Typography variant="h6">{message.message}</Typography>}
      <Formik
        onSubmit={onSubmitted}
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          errors,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              width="100%"
            >
              <Box flex={1} p={2}>
                <label htmlFor="logo">Website logo</label>
                <TextField
                  value={values?.logo}
                  onChange={handleChange("logo")}
                  onBlur={handleBlur("logo")}
                  helperText={touched.logo && errors.logo}
                  error={false && Boolean(errors.logo)}
                  variant="outlined"
                  color="primary"
                  fullWidth
                />
              </Box>
              <Box flex={1} p={2}>
                <label htmlFor="logo">Website name</label>
                <TextField
                  value={values.websiteName}
                  onChange={handleChange("websiteName")}
                  onBlur={handleBlur("websiteName")}
                  helperText={touched.websiteName && errors.websiteName}
                  error={false && Boolean(errors.websiteName)}
                  variant="outlined"
                  color="primary"
                  fullWidth
                />
              </Box>
            </Box>
            <Box p={2}>
              <label htmlFor="about description">
                Explain About Your Website.
              </label>
              <TextField
                value={values.description}
                onChange={handleChange("description")}
                onBlur={handleBlur("description")}
                helperText={touched.description && errors.description}
                error={false && Boolean(errors.description)}
                variant="outlined"
                color="primary"
                fullWidth
                multiline
                rows={7}
              />
            </Box>
            <Box p={2}>
              <label htmlFor="your shop address">your shop address</label>
              <TextField
                value={values.shopAddress}
                onChange={handleChange("shopAddress")}
                onBlur={handleBlur("shopAddress")}
                helperText={touched.shopAddress && errors.shopAddress}
                error={false && Boolean(errors.shopAddress)}
                variant="outlined"
                color="primary"
                fullWidth
              />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              width="100%"
            >
              <Box p={2} flex={1}>
                <label htmlFor="your shop address">
                  (1) your active first contact number
                </label>
                <TextField
                  value={values.phoneNumberOne}
                  onChange={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumberOne")}
                  helperText={touched.phoneNumberOne && errors.phoneNumberOne}
                  error={false && Boolean(errors.phoneNumberOne)}
                  variant="outlined"
                  color="primary"
                  fullWidth
                />
              </Box>
              <Box p={2} flex={1}>
                <label htmlFor="your shop address">
                  (2) your active second contact number
                </label>
                <TextField
                  value={values.phoneNumberTwo}
                  onChange={handleChange("phoneNumberTwo")}
                  onBlur={handleBlur("phoneNumberTwo")}
                  helperText={touched.phoneNumberTwo && errors.phoneNumberTwo}
                  error={false && Boolean(errors.phoneNumberTwo)}
                  variant="outlined"
                  color="primary"
                  fullWidth
                />
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              width="100%"
            >
              <Box p={2} flex={1}>
                <label htmlFor="your shop address">
                  Your facebook page link
                </label>
                <TextField
                  value={values.facebookLink}
                  onChange={handleChange("facebookLink")}
                  onBlur={handleBlur("facebookLink")}
                  helperText={touched.facebookLink && errors.facebookLink}
                  error={false && Boolean(errors.facebookLink)}
                  variant="outlined"
                  color="primary"
                  fullWidth
                />
              </Box>
              <Box p={2} flex={1}>
                <label htmlFor="your shop address">
                  Your instagram page link
                </label>
                <TextField
                  value={values.instagramLink}
                  onChange={handleChange("instagramLink")}
                  onBlur={handleBlur("instagramLink")}
                  helperText={touched.instagramLink && errors.instagramLink}
                  error={false && Boolean(errors.instagramLink)}
                  variant="outlined"
                  color="primary"
                  fullWidth
                />
              </Box>
            </Box>
            <Box
              my={3}
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <ButtonComponent
                type="submit"
                variant="contained"
                style={{
                  background: palette.error.main,
                  color: "#fff",
                  marginRight: 10,
                }}
              >
                Cancel
              </ButtonComponent>
              <ButtonComponent
                type="submit"
                variant="contained"
                color="primary"
              >
                Save details
              </ButtonComponent>
            </Box>
          </form>
        )}
      </Formik>
    </AdminNavs>
  );
};
