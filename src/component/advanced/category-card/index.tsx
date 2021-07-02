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
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ image, label }) => {
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
     },
}));
