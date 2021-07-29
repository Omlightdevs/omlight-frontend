import React from "react";

import {
  Box,
  Grid,
  makeStyles,
  Theme,
  Typography,
  TextField,
} from "@material-ui/core";
import { DefaultLayout } from "../../../layout";
import Helmet from "react-helmet";
import {
  Background,
  Title,
  CategoryCard,
  ButtonComponent,
} from "../../../component";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import categoryServices from "../../../services/category.services";
import { ICategoryProps } from "../../../types";

interface ContactFormProps {
  name: string;
  contact: string;
  email: string;
  message: string;
}

const initialValues: ContactFormProps = {
  name: "",
  contact: "",
  email: "",
  message: "",
};

const validationObject = yup.object().shape({
  name: yup.string().required("Your name required"),
  contact: yup.string().required("Please add your contact number"),
  email: yup.string().email(),
  message: yup.string().required("Please write a message atleast..."),
});

export const Home: React.FC = () => {
  const classes = useStyles();
  const [category, setCategories] = React.useState<ICategoryProps[]>([]);
  const handleContactSubmit = (e: any) => {
    return console.log(e);
  };
  React.useEffect(() => {
    (async () => {
      const categories = await categoryServices.getAllCategories();
      setCategories(categories.categories);
    })();
  }, []);
  return (
    <DefaultLayout
      logo="Om lights"
      link={[
        { linkName: "Home", path: "/home" },
        { linkName: "About", path: "/about" },
        { linkName: "Contact", path: "/contact" },
      ]}
    >
      <Helmet>
        <title>om lights - we providing you a best light brand solutions</title>
      </Helmet>
      <Background
        backgroundImage="https://images.pexels.com/photos/4112237/pexels-photo-4112237.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        heading="Welcome to OM Lights"
        subHeading="
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore dolores laboriosam numquam cumque nostrum adipisci sunt aperiam? Non eveniet ratione unde omnis consequuntur. Facere quos veritatis rerum eligendi similique!"
      />
      {category?.length > 0 ? (
        <Box pl={3} mb={5} pr={3} id="categories">
          <Title label="Explore Categories" path="#category" />
          <Grid container spacing={3}>
            {category?.map((data: ICategoryProps) => (
              <Grid item xs={12} sm={12} md={4} lg={3} xl={3} key={data._id}>
                <Link to={`/category/${data._id}`} className={classes.links}>
                  <CategoryCard
                    image={data.image}
                    label={data.name}
                    description={data.description}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
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
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
            <Box>
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
                          value={values.contact}
                          onChange={handleChange("contact")}
                          onBlur={handleBlur("contact")}
                          helperText={touched.contact && errors.contact}
                          error={false && Boolean(errors.contact)}
                          fullWidth
                        />
                      </Box>
                      <Box flex={1} ml={1}>
                        <TextField
                          variant="outlined"
                          label="email (optional)"
                          color="primary"
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
}));
