import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import Layout from "../pages/Layout";

const useStyles = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", Sans-serif'
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={useStyles}>
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Layout} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
