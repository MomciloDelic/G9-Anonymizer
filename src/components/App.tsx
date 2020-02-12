import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import history from "../history";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Kontakt from "../pages/Kontakt";
import Footer from "../components/Footer";

let theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", Sans-serif',
    fontWeightRegular: 300
  }
});
theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <Navbar />
        <CssBaseline />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/kontakt' exact component={Kontakt} />
        </Switch>
        <Footer />
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
