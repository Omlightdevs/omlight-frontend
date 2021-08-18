import React from "react";

import {
  Container,
  makeStyles,
  Box,
  Theme,
  Typography,
} from "@material-ui/core";
import { ButtonComponent } from "../../ui";
import { Link } from "react-router-dom";

interface BackgroundProps {
  backgroundImage: string;
  heading: string;
}

export const Background: React.FC<BackgroundProps> = ({
  backgroundImage,
  heading,
}) => {
  const styles = useStyles();
  return (
    <Box
      className={styles.root}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="60vh"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <Container>
          <Box>
            <Typography
              className={styles.heading}
              align="center"
              variant="h3"
              color="primary"
            >
              {heading}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={3}
          >
            <Link to="/about" style={{ textDecoration: "none" }}>
              <ButtonComponent color="primary" variant="contained">
                Explore something about us!
              </ButtonComponent>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  heading: {
    color: "#fff",
  },
}));
