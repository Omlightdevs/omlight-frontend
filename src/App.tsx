import React from "react";

import {
     Home,
     Dashboard,
     LoginAuth,
     CategoryDetails,
     ContactPage,
     AboutPage,
     LightDetails,
     ForgotPassword,
     CategoryPage,
     ProductPage,
     AdminAccountPage,
     CustomersPage,
     ManageContactPage,
     OtherPage,
} from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Auth } from "./auth";

const theme = createMuiTheme({
     palette: {
          primary: {
               main: "#6366F1",
          },
          secondary: {
               main: "#10B981",
          },
     },
     shape: {
          borderRadius: 0,
     },
});

export default function App() {
     return (
          <ThemeProvider theme={theme}>
               <BrowserRouter>
                    <Switch>
                         {/* General routes */}
                         <Route exact path="/" component={Home} />
                         <Route
                              exact
                              path="/category/:categoryId"
                              component={CategoryDetails}
                         />
                         <Route
                              exact
                              path="/light/:lightId"
                              component={LightDetails}
                         />
                         <Route exact path="/contact" component={ContactPage} />
                         <Route exact path="/about" component={AboutPage} />
                         <Route exact path="/login" component={LoginAuth} />
                         <Route
                              exact
                              path="/forgot-password"
                              component={ForgotPassword}
                         />
                         {/* Admin routes */}
                         <Auth>
                              <Route
                                   exact
                                   path="/admin/dashboard"
                                   component={Dashboard}
                              />
                              <Route
                                   exact
                                   path="/admin/manage-categories"
                                   component={CategoryPage}
                              />
                              <Route
                                   exact
                                   path="/admin/manage-products"
                                   component={ProductPage}
                              />
                              <Route
                                   exact
                                   path="/admin/manage-account"
                                   component={AdminAccountPage}
                              />
                              <Route
                                   exact
                                   path="/admin/manage-customers"
                                   component={CustomersPage}
                              />
                              <Route
                                   exact
                                   path="/admin/manage-contact-page"
                                   component={ManageContactPage}
                              />
                              <Route
                                   exact
                                   path="/admin/manage-others"
                                   component={OtherPage}
                              />
                         </Auth>
                    </Switch>
               </BrowserRouter>
          </ThemeProvider>
     );
}
