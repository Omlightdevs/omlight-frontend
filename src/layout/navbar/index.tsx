import React from "react";

import clsx from "clsx";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Box,
  Container,
  Grid,
} from "@material-ui/core";
import {
  Menu,
  ChevronRight,
  Close,
  Email,
  Instagram,
  Facebook,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

interface NavbarProps {
  link: {
    linkName: string;
    path: string;
  }[];
  logo: string;
}

export const DefaultLayout: React.FC<NavbarProps> = ({
  link,
  logo,
  children,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar
        className={clsx(classes.appBar)}
        position="static"
        color="primary"
      >
        <CssBaseline />
        <Toolbar>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            flex={1}
          >
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              color="inherit"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <Menu />
            </IconButton>
            <Typography variant="h4" noWrap>
              {logo}
            </Typography>
          </Box>
          <Box
            className={classes.desktopLink}
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
          >
            {link.map(({ linkName, path }, index) => (
              <Link to={path} className={classes.links} key={index}>
                <Typography variant="button" style={{ fontWeight: 700 }}>
                  {linkName}
                </Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <Close color="primary" />
            ) : (
              <ChevronRight />
            )}
          </IconButton>
        </div>
        <Divider />
        {link.map(({ linkName, path }, index) => (
          <Link
            key={index}
            to={path}
            className={clsx(classes.links && classes.mobileLink)}
          >
            <Typography variant="button">{linkName}</Typography>
          </Link>
        ))}
      </Drawer>
      <main style={{ scrollBehavior: "smooth" }}>{children}</main>
      <footer className={classes.footer}>
        <Container>
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <Typography
                align="center"
                style={{ fontWeight: 600 }}
                variant="h4"
                noWrap
              >
                {logo}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="body1">Pages</Typography>
                {link.map(({ linkName, path }, index) => (
                  <Link key={index} to={path} className={classes.footerLinks}>
                    <Typography>{linkName}</Typography>
                  </Link>
                ))}
                <Link to="/login" className={classes.footerLinks}>
                  <Typography>admin account</Typography>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                <Typography>Social contacts :</Typography>
                <Box mr={3}>
                  <Link to="#socialRoad" className={classes.links}>
                    <Email />
                  </Link>
                </Box>
                <Box mr={3}>
                  <Link to="#socialRoad" className={classes.links}>
                    <Instagram />
                  </Link>
                </Box>
                <Box mr={3}>
                  <Link to="#socialRoad" className={classes.links}>
                    <Facebook />
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

const drawerWidth = 250;
const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    // backgroundColor: "#fff",
    color: "#fff",
  },
  desktopLink: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  links: {
    textDecoration: "none",
    marginLeft: theme.spacing(2),
    color: "#fff",
    transition: "200ms",
    "&:hover": {
      color: "#000",
    },
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      display: "none",
    },
  },
  mobileLink: {
    marginTop: theme.spacing(2),
    textDecoration: "none",
    color: theme.palette.primary["main"],
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  footer: {
    backgroundColor: theme.palette.primary["main"],
    color: "#fff",
  },
  footerLinks: {
    marginTop: theme.spacing(2),
    textDecoration: "none",
    color: "#fff",
  },
}));
