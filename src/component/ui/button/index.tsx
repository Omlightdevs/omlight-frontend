import React from "react";
import { Button, ButtonProps, makeStyles, Theme } from "@material-ui/core";

export const ButtonComponent: React.FC<ButtonProps> = ({
     children,
     ...rest
}) => {
     const classes = useStyles();
     return (
          <Button
               disableRipple={true}
               disableTouchRipple={true}
               className={classes.root}
               {...rest}
          >
               {children}
          </Button>
     );
};

const useStyles = makeStyles((theme: Theme) => ({
     root: {
          boxShadow: "none",
          borderRadius: 0,
          textTransform: "capitalize",
          "&:hover": {
               boxShadow: "none",
          },
     },
}));
