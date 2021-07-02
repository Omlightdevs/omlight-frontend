import {
     Box,
     Typography,
     TableContainer,
     Paper,
     Table,
     TableHead,
     TableRow,
     TableCell,
     TableBody,
     Dialog,
     DialogTitle,
     DialogContent,
     DialogContentText,
     TextField,
     DialogActions,
     Button,
     makeStyles,
     Theme,
} from "@material-ui/core";
import { CategoryOutlined } from "@material-ui/icons";
import { Formik } from "formik";
import React from "react";
import { ButtonComponent } from "../../../component";
import { AdminNavs } from "../../../layout";
import lightsService from "../../../services/lights.service";
import { INewLightProps, ILightProps } from "../../../types";
import * as yup from "yup";

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
               console.log(data);
               setLights(data.lights);
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
                    <TableContainer component={Paper}>
                         <Table size="small">
                              <TableHead className={styles.tableHead}>
                                   <TableRow>
                                        <TableCell
                                             className={styles.tableCell}
                                             align="center"
                                        ></TableCell>
                                        <TableCell
                                             className={styles.tableCell}
                                             align="center"
                                        >
                                             <Typography variant="h6">
                                                  Image
                                             </Typography>
                                        </TableCell>
                                        <TableCell
                                             className={styles.tableCell}
                                             align="center"
                                        >
                                             <Typography variant="h6">
                                                  Name
                                             </Typography>
                                        </TableCell>
                                        <TableCell
                                             className={styles.tableCell}
                                             align="center"
                                        >
                                             <Typography variant="h6">
                                                  Description
                                             </Typography>
                                        </TableCell>
                                        <TableCell
                                             className={styles.tableCell}
                                             align="center"
                                        >
                                             <Typography variant="h6">
                                                  price
                                             </Typography>
                                        </TableCell>
                                        <TableCell
                                             className={styles.tableCell}
                                             align="center"
                                        >
                                             <Typography variant="h6">
                                                  Actions
                                             </Typography>
                                        </TableCell>
                                   </TableRow>
                              </TableHead>
                              <TableBody>
                                   {lights?.map((res) => (
                                        <TableRow>
                                             <TableCell align="center">
                                                  <CategoryOutlined />
                                             </TableCell>
                                             <TableCell align="center">
                                                  <img
                                                       height="150"
                                                       src={res.images}
                                                       alt=""
                                                  />
                                             </TableCell>
                                             <TableCell align="center">
                                                  <Typography
                                                       variant="h5"
                                                       color="primary"
                                                  >
                                                       {res.title}
                                                  </Typography>
                                             </TableCell>
                                             <TableCell align="center">
                                                  {res.description}
                                             </TableCell>
                                             <TableCell align="center">
                                                  ₹ {res.price}
                                             </TableCell>
                                             <TableCell>
                                                  <Box
                                                       display="flex"
                                                       flexDirection="row"
                                                       justifyContent="space-between"
                                                       alignItems="center"
                                                  >
                                                       <ButtonComponent variant="outlined">
                                                            Update
                                                       </ButtonComponent>
                                                       <ButtonComponent variant="outlined">
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
                         Hey make sure you have correct details to add a
                         lights...
                    </DialogTitle>
                    <DialogContent>
                         <DialogContentText>
                              This light will displayed on the second page of
                              the website make sure before uplode
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
                                   <form>
                                        <Box mt={3}>
                                             <TextField
                                                  type="text"
                                                  label="Enter light title"
                                                  variant="outlined"
                                                  fullWidth
                                                  name="title"
                                                  id="title"
                                                  value={values.title}
                                                  onChange={handleChange(
                                                       "name"
                                                  )}
                                                  onBlur={handleBlur("title")}
                                                  helperText={
                                                       touched.title &&
                                                       errors.title
                                                  }
                                                  error={
                                                       false &&
                                                       Boolean(errors.title)
                                                  }
                                             />
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
                                                  onChange={handleChange(
                                                       "price"
                                                  )}
                                                  onBlur={handleBlur("price")}
                                                  helperText={
                                                       touched.price &&
                                                       errors.price
                                                  }
                                                  error={
                                                       false &&
                                                       Boolean(errors.price)
                                                  }
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
                                                  multiline
                                                  rows={5}
                                                  value={values.description}
                                                  onChange={handleChange(
                                                       "description"
                                                  )}
                                                  onBlur={handleBlur(
                                                       "description"
                                                  )}
                                                  helperText={
                                                       touched.description &&
                                                       errors.description
                                                  }
                                                  error={
                                                       false &&
                                                       Boolean(
                                                            errors.description
                                                       )
                                                  }
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
