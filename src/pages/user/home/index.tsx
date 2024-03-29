import React from "react";

import {
  Box,
  Grid,
  makeStyles,
  Theme,
  Typography,
  TextField,
  useTheme,
} from "@material-ui/core";
import { DefaultLayout } from "../../../layout";
import Helmet from "react-helmet";
import {
  Background,
  Title,
  CategoryCard,
  ButtonComponent,
  CategoryLoader,
} from "../../../component";
import { Formik } from "formik";
import * as yup from "yup";
import categoryServices from "../../../services/category.services";
import featuresServices from "../../../services/features.services";
import {
  ICategoryProps,
  IContactFormProps,
  IFeaturesProps,
} from "../../../types";

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

export const Home: React.FC = () => {
  const classes = useStyles();
  const [category, setCategories] = React.useState<ICategoryProps[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [websiteName, setWebsiteName] = React.useState("");

  React.useEffect(() => {
    (async () => {
      const information = await featuresServices.getAllDetails();

      information?.map((res: IFeaturesProps) => {
        setWebsiteName(res.websiteName);
      });
    })();
  }, []);

  const handleContactSubmit = async (e: any) => {
    const message = await featuresServices.contactForm(e);
    setSuccess(message);
  };

  const { palette } = useTheme();

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const categories = await categoryServices.getAllCategories();
      setCategories(categories.categories);
      setLoading(false);
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
        <title>om lights - we providing you a best light brand solutions</title>
      </Helmet>
      <Background
        backgroundImage="https://images.pexels.com/photos/4112237/pexels-photo-4112237.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        heading={`Welcome to ${websiteName}`}
      />
      <Box pl={3} mb={5} pr={3} id="categories">
        <Title label="Explore Categories" />
      </Box>
      {loading && (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <CategoryLoader
              loadingSpeed={3}
              forGroundColor={palette.primary.main}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <CategoryLoader
              loadingSpeed={3}
              forGroundColor={palette.primary.main}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <CategoryLoader
              loadingSpeed={3}
              forGroundColor={palette.primary.main}
            />
          </Grid>
        </Grid>
      )}
      {!loading && category?.length && (
        <Box pl={3} mb={5} pr={3} id="categories">
          <Grid container spacing={3}>
            {category?.map((data: ICategoryProps) => (
              <Grid item xs={12} sm={12} md={4} lg={3} xl={3} key={data._id}>
                <CategoryCard
                  image={data.image}
                  label={data.name}
                  path={`/category/${data._id}`}
                  description={data.description}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      {!loading && !category.length && (
        <Box my={3}>
          <Typography variant="h3" align="center">
            No Information have been uploaded by admin
          </Typography>
        </Box>
      )}
      <Box p={3} mb={10} bgcolor="#D1D5DB">
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="row"
              justifyContent="center"
            >
              <Box flex={1}>
                <Typography variant="h3" color="primary">
                  Directly reach us with in a seconds...
                </Typography>
                <Typography variant="body1">
                  For any query and questions you can send the message with this
                  form message and contact informations.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
            <Box>
              <Box my={3}>
                {success && <Typography variant="body1">{success}</Typography>}
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
                        classes={{ root: classes.appTextInput }}
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
                          classes={{ root: classes.appTextInput }}
                          value={values.phoneNumber}
                          onChange={handleChange("phoneNumber")}
                          onBlur={handleBlur("phoneNumber")}
                          helperText={touched.phoneNumber && errors.phoneNumber}
                          error={false && Boolean(errors.phoneNumber)}
                          fullWidth
                        />
                      </Box>
                      <Box flex={1} ml={1}>
                        <TextField
                          variant="outlined"
                          label="email (optional)"
                          color="primary"
                          classes={{ root: classes.appTextInput }}
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
                        classes={{ root: classes.appTextInput }}
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
          </Grid>
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  links: {
    textDecoration: "none",
    color: theme.palette.primary["main"],
  },
  appTextInput: {
    background: "#fff",
    border: `1px solid #000`,
  },
}));
