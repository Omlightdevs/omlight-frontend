import React from "react";

import { AdminNavs } from "../../../layout";
import { Grid, Box, useTheme, Typography } from "@material-ui/core";
import { ButtonComponent } from "../../../component";

export const Dashboard = () => {
     const { palette } = useTheme();
     console.log(localStorage.getItem("Token"));
     return (
          <AdminNavs>
               <Grid container spacing={5}>
                    <Grid item lg={4} xl={4}>
                         <Box
                              p={3}
                              bgcolor="#EEF2FF"
                              display="flex"
                              flexDirection="column"
                              justifyContent="center"
                              alignItems="center"
                         >
                              <Box
                                   flex={1}
                                   display="flex"
                                   flexDirection="column"
                                   justifyContent="center"
                                   alignItems="center"
                              >
                                   <Typography variant="h1" color="primary">
                                        5
                                   </Typography>
                                   <Typography variant="subtitle1">
                                        Lights have been uploaded
                                   </Typography>
                              </Box>
                              <Box
                                   borderTop={1}
                                   borderColor={palette.primary["main"]}
                                   pt={2}
                                   flex={1}
                                   display="flex"
                                   flexDirection="row"
                                   justifyContent="flex-end"
                                   alignItems="center"
                                   width="100%"
                              >
                                   <ButtonComponent
                                        variant="outlined"
                                        color="primary"
                                   >
                                        View details
                                   </ButtonComponent>
                              </Box>
                         </Box>
                    </Grid>
                    <Grid item lg={4} xl={4}>
                         <Box
                              p={3}
                              bgcolor="#EEF2FF"
                              display="flex"
                              flexDirection="column"
                              justifyContent="center"
                              alignItems="center"
                         >
                              <Box
                                   flex={1}
                                   display="flex"
                                   flexDirection="column"
                                   justifyContent="center"
                                   alignItems="center"
                              >
                                   <Typography variant="h1" color="primary">
                                        5
                                   </Typography>
                                   <Typography variant="subtitle1">
                                        Categories have been uploaded
                                   </Typography>
                              </Box>
                              <Box
                                   borderTop={1}
                                   borderColor={palette.primary["main"]}
                                   pt={2}
                                   flex={1}
                                   display="flex"
                                   flexDirection="row"
                                   justifyContent="flex-end"
                                   alignItems="center"
                                   width="100%"
                              >
                                   <ButtonComponent
                                        variant="outlined"
                                        color="primary"
                                   >
                                        View details
                                   </ButtonComponent>
                              </Box>
                         </Box>
                    </Grid>
                    <Grid item lg={4} xl={4}>
                         <Box
                              p={3}
                              bgcolor="#EEF2FF"
                              display="flex"
                              flexDirection="column"
                              justifyContent="center"
                              alignItems="center"
                         >
                              <Box
                                   flex={1}
                                   display="flex"
                                   flexDirection="column"
                                   justifyContent="center"
                                   alignItems="center"
                              >
                                   <Typography variant="h1" color="primary">
                                        5
                                   </Typography>
                                   <Typography variant="subtitle1">
                                        Tried to reach you as contact form
                                   </Typography>
                              </Box>
                              <Box
                                   borderTop={1}
                                   borderColor={palette.primary["main"]}
                                   pt={2}
                                   flex={1}
                                   display="flex"
                                   flexDirection="row"
                                   justifyContent="flex-end"
                                   alignItems="center"
                                   width="100%"
                              >
                                   <ButtonComponent
                                        variant="outlined"
                                        color="primary"
                                   >
                                        View details
                                   </ButtonComponent>
                              </Box>
                         </Box>
                    </Grid>
               </Grid>
          </AdminNavs>
     );
};
