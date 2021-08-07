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
  Card,
  CardActions,
  CardMedia,
  IconButton,
  CardHeader,
  CardContent,
  Container,
} from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
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
  const [searchText, setSearchText] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: any) => {
    await lightsService.createNewLights(e);
    const lights = await lightsService.getAllLights();
    setLights(lights.lights);
  };

  const deleteProductWithId = async (id: string) => {
    await lightsService.DelteLightById(id);
    const light = await lightsService.getAllLights();
    setLights(light.lights);
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
              List out new products
            </ButtonComponent>
          </Box>
        </Box>
        <Container>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <TextField
              fullWidth
              onChange={(e) => setSearchText(e.target.value)}
              margin="dense"
              type="text"
              color="primary"
              variant="outlined"
              label="Which light details you are looking for?"
            />
          </Box>
        </Container>
        <Box my={3}>
          <Grid container spacing={3}>
            {lights
              ?.filter((val: ILightProps) => {
                if (searchText === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((res) => (
                <Grid key={res._id} item xs={12} xl={6} lg={6} md={6}>
                  <Card className={styles.productCards}>
                    <CardHeader
                      title={
                        <Typography variant="h5" color="primary">
                          {res.title}
                        </Typography>
                      }
                    />
                    <CardMedia
                      component="img"
                      height="300"
                      image={res.images}
                      title={res.title}
                    />
                    <CardContent>
                      {res.price && (
                        <Typography
                          variant="body1"
                          className={styles.description}
                        >
                          Price - {res.price}
                        </Typography>
                      )}
                      <Typography
                        variant="body2"
                        className={styles.description}
                      >
                        {res.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton
                        onClick={() => deleteProductWithId(res._id)}
                        edge="end"
                        size="medium"
                      >
                        <DeleteOutline titleAccess="Delete this product" />
                      </IconButton>
                    </CardActions>
                  </Card>
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
                    onChange={handleChange("title")}
                    onBlur={handleBlur("title")}
                    helperText={touched.title && errors.title}
                    error={false && Boolean(errors.title)}
                  />
                </Box>
                <Box mt={1}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="demo-simple-select-outlined-label">
                      Select product categories
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      onChange={handleChange("category")}
                      label="product categories"
                      name="category"
                    >
                      {category?.map(({ _id, name, description }) => (
                        <MenuItem key={_id} value={_id}>
                          {name} - {description}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box mt={1}>
                  <TextField
                    type="text"
                    label="Enter product firebase image link"
                    variant="outlined"
                    fullWidth
                    name="title"
                    id="title"
                    value={values.images}
                    onChange={handleChange("images")}
                    onBlur={handleBlur("images")}
                    helperText={touched.price && errors.price}
                    error={false && Boolean(errors.price)}
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
                    rows={10}
                    value={values.description}
                    onChange={handleChange("description")}
                    onBlur={handleBlur("description")}
                    helperText={touched.description && errors.description}
                    error={false && Boolean(errors.description)}
                  />
                </Box>
                <DialogActions style={{ marginRight: -15 }}>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    onClick={() => {
                      handleClose();
                    }}
                    color="primary"
                  >
                    Upload
                  </Button>
                </DialogActions>
              </form>
            )}
          </Formik>
        </DialogContent>
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
  description: {
    color: "#808080",
  },
  productCards: {
    border: `1px solid ${theme.palette.primary["main"]}`,
    boxShadow: "none",
  },
  dangerText: {
    color: theme.palette.error["main"],
  },
}));
