import React from "react";
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import Home from "../pages/Home";

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
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
