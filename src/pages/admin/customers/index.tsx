import React from "react";

import {
  Typography,
  useTheme,
  Box,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@material-ui/core";
import { AdminNavs } from "../../../layout";
import featureServices from "../../../services/features.services";
import { IContactFormProps } from "../../../types";
import { ButtonComponent } from "../../../component";
import { DeleteForeverOutlined } from "@material-ui/icons";

export const CustomersPage = () => {
  const { palette } = useTheme();
  const [customer, setCustomer] = React.useState<IContactFormProps[]>();
  React.useEffect(() => {
    (async () => {
      const customers = await featureServices.getCustomer();
      setCustomer(customers);
    })();
  }, []);

  const deleteContactDetails = async (_id: string) => {
    await featureServices.deleteContactDetails(_id);

    const customers = await featureServices.getCustomer();
    setCustomer(customers);
  };
  return (
    <AdminNavs>
      <Typography variant="h5">
        <span style={{ color: palette.primary["main"] }}>Hello admin</span>,
        website every form replay will apear here...
      </Typography>
      <Box my={3}>
        <Grid container spacing={3}>
          {customer &&
            customer?.map(({ _id, name, message, phoneNumber, email }) => (
              <Grid item xs={12} md={6} lg={3} xl={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" color="primary">
                      {name}
                    </Typography>
                    <Typography variant="h6">{phoneNumber}</Typography>
                    {email && <Typography variant="h6">{email}</Typography>}
                    <Typography variant="body1">{message}</Typography>
                  </CardContent>
                  <CardActions>
                    <Box display="flex" justifyContent="flex-end" width="100%">
                      <ButtonComponent
                        color="primary"
                        onClick={() => deleteContactDetails(`${_id}`)}
                      >
                        <DeleteForeverOutlined />
                      </ButtonComponent>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          {!customer?.length && (
            <Box textAlign="center" width="100%" my={3}>
              <Typography variant="h5" color="primary">
                Currently no customer have been react to you!
              </Typography>
            </Box>
          )}
        </Grid>
      </Box>
    </AdminNavs>
  );
};
