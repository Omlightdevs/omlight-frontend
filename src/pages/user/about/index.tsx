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
          {details?.map(
            ({
              websiteName,
              shopAddress,
              description,
              phoneNumberOne,
              phoneNumberTwo,
              shopImagesOne,
              shopImagesTwo,
              shopImagesThree,
              shopImagesFour,
              shopImagesFive,
            }) => (
              <Box>
                <Typography className={styles.title} variant="h3">
                  {websiteName} welcomes to you here!
                </Typography>
                <Typography variant="body1">
                  <p style={{ whiteSpace: "pre-wrap" }}>{description}</p>
                </Typography>

                <Box my={3}>
                  <Grid alignItems="center" container spacing={3}>
                    <Grid item xs={12} md={12} sm={12} xl={12} lg={12}>
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

                  <Box my={3}>
                    <Typography variant="h6" color="primary">
                      Let's have a look at some latest picture of our shop
                    </Typography>
                  </Box>
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} sm={12} md={12} xl={4} lg={4}>
                      <img
                        src={shopImagesOne}
                        height="100%"
                        width="100%"
                        alt=""
                        className={styles.shopImages}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} xl={4} lg={4}>
                      <img
                        src={shopImagesTwo}
                        height="100%"
                        width="100%"
                        alt=""
                        className={styles.shopImages}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} xl={4} lg={4}>
                      <img
                        src={shopImagesThree}
                        height="100%"
                        width="100%"
                        alt=""
                        className={styles.shopImages}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} xl={4} lg={4}>
                      <img
                        src={shopImagesFour}
                        height="100%"
                        width="100%"
                        alt=""
                        className={styles.shopImages}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} xl={4} lg={4}>
                      <img
                        src={shopImagesFive}
                        height="100%"
                        width="100%"
                        alt=""
                        className={styles.shopImages}
                      />
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
  shopImages: {
    borderRadius: theme.spacing(2),
  },
}));
