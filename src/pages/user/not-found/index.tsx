import React from "react";

import { NotFoundSvg } from "../../../component";
import { DefaultLayout } from "../../../layout";
import { Box, Typography, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <DefaultLayout
      logo="Om lights"
      link={[
        { linkName: "Home", path: "/home" },
        { linkName: "About", path: "/about" },
        { linkName: "Contact", path: "/contact" },
      ]}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="90vh"
      >
        <NotFoundSvg height={500} width={500} />
        <Typography variant="h6">
          Snap! not found what you are looking for?{" "}
          <Link to="/">Go back to homepage</Link>
        </Typography>
      </Box>
    </DefaultLayout>
  );
};
