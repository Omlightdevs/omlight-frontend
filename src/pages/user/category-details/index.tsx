import React from "react";

import { DefaultLayout } from "../../../layout";
import { ButtonComponent, Title } from "../../../component";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import lightsService from "../../../services/lights.service";
import { ICategoryProps, ILightProps } from "../../../types";
import categoryServices from "../../../services/category.services";
import Helmet from "react-helmet";

interface Params {
  categoryId: string;
}

export const CategoryDetails = () => {
  const params = useParams<Params>();
  const [light, setLight] = React.useState<ILightProps[]>();
  const [category, setCategory] = React.useState<ICategoryProps>();
  const [searchText, setSearchText] = React.useState("");

  React.useEffect(() => {
    (async () => {
      const lights = await lightsService.getLightsByCategory(params.categoryId);
      setLight(lights);
      const category = await categoryServices.getCategoryById(
        params.categoryId
      );
      setCategory(category);
    })();
  }, [params.categoryId]);

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
        <title>om lights - our categories</title>
      </Helmet>
      <Box p={3}>
        {/* <SearchBar placeholder="Search light name here" /> */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          style={{ height: "30vh" }}
          p={3}
        >
          <Container>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                fullWidth
                onChange={(e) => setSearchText(e.target.value)}
                margin="dense"
                type="text"
                color="primary"
                variant="outlined"
                label="Search for lights"
              />
            </Box>
          </Container>
        </Box>
        <Title label={category?.name as string} />
        <Grid container spacing={3}>
          {light
            ?.filter((val: ILightProps) => {
              if (searchText === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return val;
              }
            })
            .map(({ images, title, _id }) => (
              <Grid key={_id} item xs={12} sm={12} md={4} lg={3} xl={3}>
                <Card>
                  <CardActionArea style={{ cursor: "default" }}>
                    <CardMedia height="300" component="img" src={images} />
                    <CardContent>
                      <Typography variant="h5" color="primary" noWrap>
                        {title}
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Link
                        to={`/light/${_id}`}
                        style={{
                          textDecoration: "none",
                          color: "#000",
                          fontWeight: 900,
                        }}
                      >
                        <ButtonComponent variant="outlined" color="primary">
                          View details
                        </ButtonComponent>
                      </Link>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </DefaultLayout>
  );
};
