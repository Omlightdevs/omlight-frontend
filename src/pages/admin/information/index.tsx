import React from "react";

import { AdminNavs } from "../../../layout";
import { Box, Theme, useTheme, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { IFeaturesProps } from "../../../types";
import featuresServices from "../../../services/features.services";
import { Title } from "../../../component";

export const WebsiteInformation = () => {
  const classes = useStyles();
  const { palette } = useTheme();
  const [info, setInfo] = React.useState<IFeaturesProps[]>();

  React.useEffect(() => {
    (async () => {
      const data = await featuresServices.getAllDetails();
      setInfo(data);
    })();
  }, []);

  return (
    <AdminNavs>
      <Box p={2} my={3}>
        {info &&
          info.map((res) => (
            <Box>
              <Title
                buttonName="Update website information"
                label="Manage all your website information in one place"
                path={`/admin/update-contact-details/${res._id}`}
              />
              <Box my={3} key={res._id}>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box flex={1}>
                    <Typography variant="h5" color="primary">
                      Website name
                    </Typography>
                  </Box>
                  <Box flex={2}>
                    <Typography variant="h6">{res.websiteName}</Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box flex={1}>
                    <Typography variant="h5" color="primary">
                      Website logo
                    </Typography>
                  </Box>
                  <Box flex={2}>
                    <img src={res.logo} height={250} width={400} alt="" />
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  my={3}
                >
                  <Box flex={1}>
                    <Typography variant="h5" color="primary">
                      About description
                    </Typography>
                  </Box>
                  <Box flex={2}>
                    <Typography variant="body1">{res.description}</Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  my={3}
                >
                  <Box flex={1}>
                    <Typography variant="h5" color="primary">
                      Social media Links
                    </Typography>
                  </Box>
                  <Box flex={2}>
                    <Typography variant="body1">
                      Facebook - {res.facebookLink}
                    </Typography>
                    <Typography variant="body1">
                      Instagram - {res.instagramLink}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  my={3}
                >
                  <Box flex={1}>
                    <Typography variant="h5" color="primary">
                      Contact numbers
                    </Typography>
                  </Box>
                  <Box flex={2}>
                    <Typography variant="body1">
                      phone 1 - +91 {res.phoneNumberOne}
                    </Typography>
                    <Typography variant="body1">
                      phone 2 - +91 {res.phoneNumberTwo}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <Box flex={1}>
                    <Typography variant="h5" color="primary">
                      Your website's shop images
                    </Typography>
                  </Box>
                  <Box flex={2}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} xl={4}>
                        <img
                          src={res.shopImagesOne}
                          height="100%"
                          width="100%"
                          alt=""
                        />
                      </Grid>
                      <Grid item xs={12} xl={4}>
                        <img
                          src={res.shopImagesTwo}
                          height="100%"
                          width="100%"
                          alt=""
                        />
                      </Grid>
                      <Grid item xs={12} xl={4}>
                        <img
                          src={res.shopImagesThree}
                          height="100%"
                          width="100%"
                          alt=""
                        />
                      </Grid>
                      <Grid item xs={12} xl={4}>
                        <img
                          src={res.shopImagesFour}
                          height="100%"
                          width="100%"
                          alt=""
                        />
                      </Grid>
                      <Grid item xs={12} xl={4}>
                        <img
                          src={res.shopImagesFive}
                          height="100%"
                          width="100%"
                          alt=""
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
      </Box>
    </AdminNavs>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  appMainText: {
    color: theme.palette.primary.main,
  },
}));
