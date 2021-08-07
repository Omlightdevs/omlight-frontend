import React from "react";

import {
  Box,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";
import {
  HomeOutlined,
  CategoryOutlined,
  WbIncandescentOutlined,
  AccountCircleOutlined,
  AdbOutlined,
  PowerOutlined,
} from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";

export const AdminNavs: React.FC = ({ children }) => {
  const styles = useStyles();
  const history = useHistory();
  const handleLogoutUser = async () => {
    localStorage.removeItem("Token");
    history.push("/");
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <h3>Om Lights Admin Portal</h3>
        </Toolbar>
      </AppBar>
      <Box display="flex" flexDirection="row">
        <Box width="12%" m={1} p={1}>
          <List>
            <Link to="/admin/dashboard" className={styles.buttonStyles}>
              <ListItem button className={styles.buttonStyles}>
                <ListItemIcon>
                  <HomeOutlined />
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
              </ListItem>
            </Link>
            <Link to="/admin/manage-categories" className={styles.buttonStyles}>
              <ListItem button>
                <ListItemIcon>
                  <CategoryOutlined />
                </ListItemIcon>
                <ListItemText>Categories</ListItemText>
              </ListItem>
            </Link>
            <Link to="/admin/manage-products" className={styles.buttonStyles}>
              <ListItem button>
                <ListItemIcon>
                  <WbIncandescentOutlined />
                </ListItemIcon>
                <ListItemText>Products</ListItemText>
              </ListItem>
            </Link>
            <Link to="/admin/manage-customers" className={styles.buttonStyles}>
              <ListItem button>
                <ListItemIcon>
                  <AdbOutlined />
                </ListItemIcon>
                <ListItemText>Form replies</ListItemText>
              </ListItem>
            </Link>
            <Link to="/admin/manage-account" className={styles.buttonStyles}>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircleOutlined />
                </ListItemIcon>
                <ListItemText>Account</ListItemText>
              </ListItem>
            </Link>

            <ListItem button onClick={handleLogoutUser}>
              <ListItemIcon>
                <PowerOutlined />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItem>
          </List>
        </Box>
        <main className={styles.main}>{children}</main>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    width: "87%",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  buttonStyles: {
    textDecoration: "none",
    color: theme.palette.primary["main"],
  },
}));
