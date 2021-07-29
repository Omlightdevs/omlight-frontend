import {
  Box,
  Typography,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  makeStyles,
  Theme,
  Grid,
} from "@material-ui/core";
import { CategoryOutlined } from "@material-ui/icons";
import { Formik } from "formik";
import React from "react";
import { ButtonComponent } from "../../../component";
import { AdminNavs } from "../../../layout";
import lightsService from "../../../services/lights.service";
import { INewLightProps, ILightProps, ICategoryProps } from "../../../types";
import * as yup from "yup";
import categoryServices from "../../../services/category.services";

const initialValues: INewLightProps = {
  images: "",
  title: "",
  description: "",
  price: "",
};

const validateObject = yup.object().shape({
  images: yup.string().required("Images for lights is required"),
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export const ProductPage = () => {
  const [lights, setLights] = React.useState<ILightProps[]>();
  const [category, setCategory] = React.useState<ICategoryProps[]>();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: any) => {
    return console.log(e);
  };

  const styles = useStyles();
  React.useEffect(() => {
    (async () => {
      const data = await lightsService.getAllLights();
      setLights(data.lights);
      const categoryData = await categoryServices.getAllCategories();
      setCategory(categoryData.categories);
    })();
  }, []);

  return (
    <AdminNavs>
      <Box>
        <Box
          my={3}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">Manage products</Typography>
          <Box>
            <ButtonComponent
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              Create new light
            </ButtonComponent>
          </Box>
        </Box>
        <Box my={3}>
          <Grid container spacing={3}>
            {lights?.map((res) => (
              <Grid key={res._id} item xs={12} xl={6} lg={6} md={6}>
                <Box>
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={4} lg={4} xl={4} justify="center">
                      <img src={res.images} width="70%" alt="" />
                    </Grid>
                    <Grid item xs={12} md={8} lg={8} xl={8}>
                      <Typography variant="h5" color="primary">
                        {res.title}
                      </Typography>
                      <Typography variant="body1">
                        ₹ {res.price && res.price}
                      </Typography>
                      <Typography style={{ color: "#808080" }} variant="body2">
                        {res.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Hey make sure you have correct details to add a lights...
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            This light will displayed on the second page of the website make
            sure before uplode
          </DialogContentText>
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validateObject}
          >
            {({
              handleSubmit,
              handleBlur,
              handleChange,
              touched,
              errors,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mt={3}>
                  <TextField
                    type="text"
                    label="Enter light title"
                    variant="outlined"
                    fullWidth
                    name="title"
                    id="title"
                    value={values.title}
                    onChange={handleChange("name")}
                    onBlur={handleBlur("title")}
                    helperText={touched.title && errors.title}
                    error={false && Boolean(errors.title)}
                  />
                </Box>
                <Box mt={3}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="demo-simple-select-outlined-label">
                      Select product categories
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      onChange={handleChange}
                      label="product categories"
                    >
                      <MenuItem value="None">
                        <em>None</em>
                      </MenuItem>
                      {category?.map(({ _id, name }) => (
                        <MenuItem key={_id} value={_id}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box mt={1}>
                  <input
                    accept="image/jpg"
                    type="file"
                    className={styles.inputFile}
                  />
                </Box>
                <Box mt={1}>
                  <TextField
                    type="text"
                    label="Enter light price"
                    variant="outlined"
                    fullWidth
                    name="title"
                    id="title"
                    value={values.price}
                    onChange={handleChange("price")}
                    onBlur={handleBlur("price")}
                    helperText={touched.price && errors.price}
                    error={false && Boolean(errors.price)}
                  />
                </Box>
                <Box mt={1}>
                  <TextField
                    type="text"
                    label="Enter product description"
                    variant="outlined"
                    fullWidth
                    name="description"
                    id="description"
                    multiline
                    rows={5}
                    value={values.description}
                    onChange={handleChange("description")}
                    onBlur={handleBlur("description")}
                    helperText={touched.description && errors.description}
                    error={false && Boolean(errors.description)}
                  />
                </Box>
              </form>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </AdminNavs>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  tableHead: {
    backgroundColor: theme.palette.primary["main"],
  },
  tableCell: {
    color: "#fff",
  },
  inputFile: {
    width: "100%",
  },
}));
