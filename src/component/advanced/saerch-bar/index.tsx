import React from "react";

import {
     Box,
     makeStyles,
     Theme,
     Container,
     TextField,
} from "@material-ui/core";

interface ISearchBar {
     placeholder: string;
}

export const SearchBar: React.FC<ISearchBar> = ({ placeholder }) => {
     const style = useStyles();
     return (
          <Box
               display="flex"
               flexDirection="row"
               justifyContent="center"
               alignItems="center"
               className={style.searchBackground}
               p={3}
          >
               <Container>
                    <Box
                         display="flex"
                         flexDirection="row"
                         justifyContent="center"
                         alignItems="center"
                    >
                         <TextField
                              fullWidth
                              margin="dense"
                              type="text"
                              color="primary"
                              variant="outlined"
                              label={placeholder}
                         />
                    </Box>
               </Container>
          </Box>
     );
};

const useStyles = makeStyles((theme: Theme) => ({
     searchBackground: {
          height: "30vh",
     },
}));
