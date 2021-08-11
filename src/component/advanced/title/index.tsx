import React from "react";
import { Box, Typography } from "@material-ui/core";
import { ButtonComponent } from "../../";
import { ArrowRightAlt } from "@material-ui/icons";
import { Link } from "react-router-dom";

interface TitleProps {
  label: string;
  buttonName?: string;
  path?: string;
}
export const Title: React.FC<TitleProps> = ({ path, buttonName, label }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      mt={3}
      mb={3}
    >
      <Box>
        <Typography variant="h4">{label}</Typography>
      </Box>
      {path && (
        <Link to={path} style={{ textDecoration: "none" }}>
          <ButtonComponent variant="contained" color="primary">
            <Typography variant="body1">{buttonName}</Typography>{" "}
            <ArrowRightAlt />
          </ButtonComponent>
        </Link>
      )}
    </Box>
  );
};
