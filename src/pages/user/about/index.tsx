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
import { IFeaturesProps } from "../../../types";
import featuresServices from "../../../services/features.services";

export const AboutPage = () => {
  const styles = useStyles();
  const [details, setDeatils] = React.useState<IFeaturesProps[]>();

  React.useEffect(() => {
    (async () => {
      const data = await featuresServices.getAllDetails();
      setDeatils(data);
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
        <title>om lights - about us</title>
      </Helmet>
      <Container>
        <Box p={3}>
          <Typography className={styles.title} variant="h3">
            About us
          </Typography>
          {details?.map(
            ({ shopAddress, description, phoneNumberOne, phoneNumberTwo }) => (
              <Box>
                <Typography variant="body1">
                  <p style={{ whiteSpace: "pre-wrap" }}>{description}</p>
                </Typography>
                <Box my={3}>
                  <Grid alignItems="center" container spacing={3}>
                    <Grid item xs={12} md={12} sm={6} lg={6}>
                      <Box>
                        <Typography
                          variant="h6"
                          color="primary"
                          className={styles.bodyOneTitle}
                        >
                          Email address
                        </Typography>

                        <Typography variant="body1">
                          Omlite2021@gmail.com
                        </Typography>
                      </Box>
                      <Box my={2}>
                        <Typography
                          variant="h6"
                          color="primary"
                          className={styles.bodyOneTitle}
                        >
                          Contact Number
                        </Typography>
                        <Typography variant="body1">
                          +91 {phoneNumberOne}{" "}
                        </Typography>
                        <Typography variant="body1">
                          +91 {phoneNumberTwo}{" "}
                        </Typography>
                      </Box>
                      <Box my={2}>
                        <Typography
                          variant="h6"
                          color="primary"
                          className={styles.bodyOneTitle}
                        >
                          Physical Address
                        </Typography>
                        <Typography variant="body1">
                          <address>{shopAddress}</address>
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            )
          )}
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
