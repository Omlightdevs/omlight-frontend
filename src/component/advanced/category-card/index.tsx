import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  image: string;
  label: string;
  description: string;
  path: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  label,
  description,
  path,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.appCard}>
      <Link to={path} className={classes.links}>
        <CardActionArea>
          <CardMedia component="img" src={image} height={350} />
          <CardContent>
            <Typography
              variant="h5"
              noWrap
              color="primary"
              className={classes.links}
            >
              {label}
            </Typography>
            <Typography variant="body1" style={{ color: "#000" }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  links: {
    textDecoration: "none",
    color: theme.palette.primary["main"],
    textTransform: "capitalize",
  },
  appCard: {
    boxShadow: "none",
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      boxShadow: "default",
    },
  },
}));
