import React from "react";
import { DefaultLayout } from "../../../layout";
import {
     Typography,
     Box,
     Container,
     makeStyles,
     Theme,
     TextField,
} from "@material-ui/core";
import { ButtonComponent } from "../../../component";
import Helmet from "react-helmet";

export const ContactPage = () => {
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
                    <title>om lights - contact us</title>
               </Helmet>
               <Container>
                    <Box
                         height="100%"
                         pt={3}
                         pb={3}
                         display="flex"
                         flexDirection="row"
                         justifyContent="center"
                         alignItems="center"
                    >
                         <Box
                              p={3}
                              display="flex"
                              flexDirection="row"
                              justifyContent="center"
                              flexWrap="wrap"
                              flex={1}
                              boxShadow="3"
                         >
                              <Box flex={1}>
                                   <Typography
                                        variant="h3"
                                        className={styles.title}
                                        color="primary"
                                   >
                                        Let's Keep In Touch
                                   </Typography>
                                   <Box mt={5}>
                                        <Typography
                                             variant="h6"
                                             color="primary"
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
                                        >
                                             Physical Address
                                        </Typography>
                                        <Typography variant="body1">
                                             <address>
                                                  Shop No. -15, Laxmi Apartment,
                                                  Near Union Bank, Anand Nagar,
                                                  Dahisar East, Mumbai - 400068.
                                             </address>
                                        </Typography>
                                   </Box>
                              </Box>
                              <Box flex={1}>
                                   <Typography
                                        variant="h3"
                                        className={styles.title}
                                        color="primary"
                                   >
                                        Contact us we will reach you soon!
                                   </Typography>
                                   <form>
                                        <Box my={3}>
                                             <TextField
                                                  fullWidth
                                                  type="text"
                                                  variant="outlined"
                                                  color="primary"
                                                  label="What's your name?"
                                             />
                                        </Box>
                                        <Box my={3}>
                                             <TextField
                                                  fullWidth
                                                  type="text"
                                                  variant="outlined"
                                                  color="primary"
                                                  label="What's your mobile number?"
                                             />
                                        </Box>
                                        <Box my={3}>
                                             <TextField
                                                  fullWidth
                                                  type="text"
                                                  variant="outlined"
                                                  color="primary"
                                                  label="Leave a simple message..."
                                                  multiline
                                                  rows={4}
                                             />
                                        </Box>
                                        <Box
                                             display="flex"
                                             flexDirection="row"
                                             justifyContent="flex-end"
                                        >
                                             <ButtonComponent
                                                  variant="contained"
                                                  color="primary"
                                             >
                                                  Send message
                                             </ButtonComponent>
                                        </Box>
                                   </form>
                              </Box>
                         </Box>
                    </Box>
               </Container>
          </DefaultLayout>
     );
};

const useStyles = makeStyles((theme: Theme) => ({
     title: {
          fontWeight: 700,
     },
     lightLamp: {
          marginTop: theme.spacing(3),
          marginLeft: "-70px",
     },
}));
