import React from "react";

import { AdminNavs } from "../../../../layout";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  makeStyles,
  Theme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { ICategoryProps, INewCategoryProps } from "../../../../types";
import categoryServices from "../../../../services/category.services";
import { CategoryOutlined } from "@material-ui/icons";
import { ButtonComponent } from "../../../../component";
import { Formik } from "formik";
import * as yup from "yup";

const initialValues: INewCategoryProps = {
  name: "",
  description: "",
  image: "",
};

const validateObject = yup.object().shape({
  name: yup.string().required("Name for category is required"),
  description: yup.string().required("Description is required"),
  image: yup.string().required("images is required, please add link here"),
});

export const CategoryPage = () => {
  const [categories, setCategories] = React.useState<ICategoryProps[]>();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const deleteCategory = async (id: string) => {
    await categoryServices.deleteCategoryById(id);
    await categoryServices.getAllCategories();
  };

  const getCategories = async () => {
    return await categoryServices.getAllCategories();
  };

  const handleClose = async () => {
    setOpen(false);
  };

  const creatingCategories = async (e: any) => {
    await categoryServices.CreateNewCategory(e);
    await categoryServices.getAllCategories();
  };

  const styles = useStyles();
  React.useEffect(() => {
    (async () => {
      const data = await categoryServices.getAllCategories();
      setCategories(data.categories);
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
          <Typography variant="h5">Manage categories</Typography>
          <Box>
            <ButtonComponent
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              Create new category
            </ButtonComponent>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead className={styles.tableHead}>
              <TableRow>
                <TableCell
                  className={styles.tableCell}
                  align="center"
                ></TableCell>
                <TableCell className={styles.tableCell} align="center">
                  <Typography variant="h6">Image</Typography>
                </TableCell>
                <TableCell className={styles.tableCell} align="center">
                  <Typography variant="h6">Name</Typography>
                </TableCell>
                <TableCell className={styles.tableCell} align="center">
                  <Typography variant="h6">Description</Typography>
                </TableCell>
                <TableCell className={styles.tableCell} align="center">
                  <Typography variant="h6">Actions</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories?.map((res, index) => (
                <TableRow key={index} style={{ marginTop: 5 }}>
                  <TableCell align="center">
                    <CategoryOutlined />
                  </TableCell>
                  <TableCell width="25%" align="center">
                    <img height="150" src={res.image} alt="" />
                  </TableCell>
                  <TableCell width="25%" align="center">
                    <Typography variant="h5" color="primary">
                      {res.name}
                    </Typography>
                  </TableCell>
                  <TableCell width="25%" align="center">
                    {res.description}
                  </TableCell>
                  <TableCell width="20%" align="center">
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <ButtonComponent
                        onClick={() => {
                          deleteCategory(res._id);
                        }}
                        variant="outlined"
                      >
                        Delete
                      </ButtonComponent>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Hey make sure you have correct details to add a categories...
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            This category will displayed on the first page of the website be
            careful for all the details
          </DialogContentText>
          <Formik
            onSubmit={creatingCategories}
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
                    label="Enter category name"
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

                <Box mt={1}>
                  <TextField
                    type="text"
                    label="Enter category description"
                    variant="outlined"
                    fullWidth
                    name="description"
                    id="description"
                    value={values.description}
                    onChange={handleChange("description")}
                    onBlur={handleBlur("description")}
                    helperText={touched.description && errors.description}
                    error={false && Boolean(errors.description)}
                  />
                </Box>
                <Box mt={1}>
                  <TextField
                    type="text"
                    label="Enter category image"
                    variant="outlined"
                    fullWidth
                    name="image"
                    id="image"
                    value={values.image}
                    onChange={handleChange("image")}
                    onBlur={handleBlur("image")}
                    helperText={touched.image && errors.image}
                    error={false && Boolean(errors.image)}
                  />
                </Box>
                <DialogActions>
                  <ButtonComponent onClick={handleClose} color="primary">
                    Cancel
                  </ButtonComponent>
                  <ButtonComponent
                    type="submit"
                    onClick={() => {
                      handleClose();
                      getCategories();
                    }}
                    color="primary"
                  >
                    create
                  </ButtonComponent>
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
    textTransform: "capitalize",
  },
  inputFile: {
    width: "100%",
  },
}));
