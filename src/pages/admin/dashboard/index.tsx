import React from "react";

import { AdminNavs } from "../../../layout";
import { Grid, Box, useTheme, Typography } from "@material-ui/core";
import { ButtonComponent } from "../../../component";
import lightsService from "../../../services/lights.service";
import categoryServices from "../../../services/category.services";
import { Link } from "react-router-dom";
import featuresServices from "../../../services/features.services";

export const Dashboard = () => {
  const { palette } = useTheme();
  const [light, setlight] = React.useState<Number>();
  const [category, setCategory] = React.useState<Number>();
  const [customer, setCustomer] = React.useState<Number>();

  React.useEffect(() => {
    (async () => {
      const light = await lightsService.getAllLights();
      const category = await categoryServices.getAllCategories();
      const customer = await featuresServices.getCustomer();
      setCategory(category.categories.length);
      setlight(light.lights.length);
      setCustomer(customer.length);
    })();
  });
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
                {light}
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
              <Link to="/admin/manage-products">
                <ButtonComponent variant="outlined" color="primary">
                  View details
                </ButtonComponent>
              </Link>
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
                {category}
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
              <Link to="/admin/manage-categories">
                <ButtonComponent variant="outlined" color="primary">
                  View details
                </ButtonComponent>
              </Link>
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
                {customer}
              </Typography>
              <Typography variant="subtitle1">
                Tried to reached you from contact form
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
              <Link to="/admin/manage-customers">
                <ButtonComponent variant="outlined" color="primary">
                  View details
                </ButtonComponent>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </AdminNavs>
  );
};
