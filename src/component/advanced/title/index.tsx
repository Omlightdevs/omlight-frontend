import React from "react";
import { Box, Typography } from "@material-ui/core";
import { ButtonComponent } from "../../";
import { ArrowRightAlt } from "@material-ui/icons";

interface TitleProps {
     label: string;
     path?: string;
}
export const Title: React.FC<TitleProps> = ({ path, label }) => {
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
                    <Box>
                         <ButtonComponent variant="contained" color="primary">
                              <ArrowRightAlt />
                         </ButtonComponent>
                    </Box>
               )}
          </Box>
     );
};
