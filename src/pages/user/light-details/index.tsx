import React from "react";

import { DefaultLayout } from "../../../layout";
import {
  Typography,
  Box,
  Grid,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { ILightProps } from "../../../types";
import lightsService from "../../../services/lights.service";
import { Redirect, useParams } from "react-router-dom";
import Helmet from "react-helmet";

interface Params {
  lightId: string;
}

export const LightDetails = () => {
  const [light, setLight] = React.useState<ILightProps>();
  const params = useParams<Params>();

  if (!params.lightId) {
    <Redirect to="/" />;
  }

  React.useEffect(() => {
    (async () => {
      const lights = await lightsService.getLightById(params.lightId);
      setLight(lights);
    })();
  }, [params.lightId]);
  const classes = useStyles();
  return (
    <DefaultLayout
      logo="Om lights"
      link={[
        { linkName: "Home", path: "/" },
        { linkName: "About", path: "/about" },
        { linkName: "Contact", path: "/contact" },
      ]}
    >
      <Helmet>
        <title>om lights - selected light details</title>
      </Helmet>
      <Box my={3} p={3}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            alignItems="center"
            justify="center"
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                width="75%"
                src={light?.images}
                alt={light?.title}
                height="75%"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Typography variant="h3">{light?.title}</Typography>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              mt={3}
            >
              <Typography variant="h5" style={{ color: "#808080" }}>
                ₹ {light?.price && light?.price}
              </Typography>
              <Box ml={2}>
                <Typography variant="body2">
                  Currently
                  {light?.active ? "In stock" : "Not avaliable in stock"}
                </Typography>
              </Box>
            </Box>
            <Box mt={3}>
              <p
                className={classes.appDescription}
                dangerouslySetInnerHTML={{
                  __html: `${light?.description}`,
                }}
              ></p>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

const useStyles = makeStyles(() => {
  return createStyles({
    appDescription: {
      whiteSpace: `pre-wrap`,
      color: "#808080",
    },
  });
});
