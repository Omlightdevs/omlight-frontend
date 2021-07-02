import React from "react";

import { Box, TextField, Container, Typography } from "@material-ui/core";
import { ButtonComponent } from "../../../component";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
     return (
          <>
               <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="row"
                    height="100vh"
               >
                    <Container>
                         <Box>
                              <Typography color="primary" variant="h3">
                                   Hello admin,
                              </Typography>
                              <Typography variant="h6">
                                   Provide your registered email for getting
                                   link for reset password :
                              </Typography>
                              <TextField
                                   variant="standard"
                                   fullWidth
                                   InputProps={{
                                        style: { fontSize: 30 },
                                   }}
                                   InputLabelProps={{ style: { fontSize: 30 } }}
                                   margin="normal"
                                   label="Enter your email address..."
                              />
                              <Box
                                   display="flex"
                                   mt={3}
                                   justifyContent="flex-end"
                              >
                                   <Link
                                        to="/"
                                        style={{ textDecoration: "none" }}
                                   >
                                        <ButtonComponent
                                             variant="outlined"
                                             color="primary"
                                             style={{ marginRight: 10 }}
                                        >
                                             Go back to home
                                        </ButtonComponent>
                                   </Link>
                                   <ButtonComponent
                                        variant="outlined"
                                        color="primary"
                                   >
                                        Send Link
                                   </ButtonComponent>
                              </Box>
                         </Box>
                    </Container>
               </Box>
          </>
     );
};
