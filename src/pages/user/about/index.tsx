import React from "react";
import { DefaultLayout } from "../../../layout";
import {
     Typography,
     Box,
     Grid,
     Container,
     Theme,
     makeStyles,
} from "@material-ui/core";
import Helmet from "react-helmet";

export const AboutPage = () => {
     const styles = useStyles();
     return (
          <DefaultLayout
               link={[
                    { linkName: "Home", path: "/" },
                    { linkName: "About", path: "/about" },
                    { linkName: "Contact", path: "/contact" },
               ]}
               logo="Om lights"
          >
               <Helmet>
                    <title>om lights - about us</title>
               </Helmet>
               <Container>
                    <Box p={3}>
                         <Typography className={styles.title} variant="h3">
                              About us
                         </Typography>
                         <Typography variant="body1">
                              <p>
                                   Lorem ipsum dolor sit amet consectetur,
                                   adipisicing elit. Alias rerum, numquam facere
                                   molestias ratione suscipit at sequi, nihil
                                   libero cupiditate culpa ut, obcaecati
                                   voluptatem eveniet? Nesciunt tempore corporis
                                   dicta praesentium voluptatibus natus,
                                   assumenda sequi rerum reiciendis fugiat,
                                   aliquid vero deleniti possimus eveniet vitae
                                   labore omnis. Quisquam laboriosam unde illum
                                   magnam.
                              </p>
                         </Typography>
                         <Box my={3}>
                              <Grid alignItems="center" container spacing={3}>
                                   <Grid item xs={12} md={12} sm={6} lg={6}>
                                        <Box>
                                             <Typography
                                                  variant="h6"
                                                  color="primary"
                                                  className={
                                                       styles.bodyOneTitle
                                                  }
                                             >
                                                  Email address
                                             </Typography>

                                             <Typography variant="body1">
                                                  Omlit2021@gmail.com
                                             </Typography>
                                        </Box>
                                        <Box my={2}>
                                             <Typography
                                                  variant="h6"
                                                  color="primary"
                                                  className={
                                                       styles.bodyOneTitle
                                                  }
                                             >
                                                  Contact Number
                                             </Typography>
                                             <Typography variant="body1">
                                                  +91 9324039704
                                             </Typography>
                                        </Box>
                                        <Box my={2}>
                                             <Typography
                                                  variant="h6"
                                                  color="primary"
                                                  className={
                                                       styles.bodyOneTitle
                                                  }
                                             >
                                                  Physical Address
                                             </Typography>
                                             <Typography variant="body1">
                                                  <address>
                                                       Shop No. -15, Laxmi
                                                       Apartment, Near Union
                                                       Bank, Anand Nagar,
                                                       Dahisar East, Mumbai -
                                                       400068.
                                                  </address>
                                             </Typography>
                                        </Box>
                                   </Grid>
                                   <Grid
                                        item
                                        xs={12}
                                        md={12}
                                        sm={6}
                                        lg={6}
                                   ></Grid>
                              </Grid>
                         </Box>

                         <Box mt={5}>
                              <Typography className={styles.title} variant="h4">
                                   Brands Provided By Us
                              </Typography>
                              <Grid
                                   container
                                   spacing={3}
                                   style={{ marginTop: 10, marginBottom: 10 }}
                              >
                                   <Grid item xs={3} md={3} lg={3} sm={3}>
                                        Brand name
                                   </Grid>
                                   <Grid item xs={3} md={3} lg={3} sm={3}>
                                        Brand name
                                   </Grid>
                                   <Grid item xs={3} md={3} lg={3} sm={3}>
                                        Brand name
                                   </Grid>
                                   <Grid item xs={3} md={3} lg={3} sm={3}>
                                        Brand name
                                   </Grid>
                                   <Grid item xs={3} md={3} lg={3} sm={3}>
                                        Brand name
                                   </Grid>
                              </Grid>
                         </Box>
                    </Box>
               </Container>
          </DefaultLayout>
     );
};

const useStyles = makeStyles((theme: Theme) => ({
     title: {
          fontWeight: 700,
          color: theme.palette.primary["main"],
     },
     bodyOneTitle: {},
}));
