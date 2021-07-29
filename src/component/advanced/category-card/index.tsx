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
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  label,
  description,
}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" src={image} height={350} />
        <Link to="#category_id" className={classes.links}>
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
        </Link>
      </CardActionArea>
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  links: {
    textDecoration: "none",
    color: theme.palette.primary["main"],
    textTransform: "capitalize",
  },
}));
