import { Typography, useTheme } from "@material-ui/core";
import React from "react";
import { AdminNavs } from "../../../layout";

export const CustomersPage = () => {
  const { palette } = useTheme();
  return (
    <AdminNavs>
      <Typography variant="h5">
        <span style={{ color: palette.primary["main"] }}>Hello admin</span>,
        website every form replay will apear here...
      </Typography>
    </AdminNavs>
  );
};
