import React from "react";
import Layout from "./components/Layout";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";


const useStyles = createMuiTheme({
  typography: {
    fontFamily: "\"Open Sans\", Sans-serif",
  },
});

const App = () => {
  return(
  <MuiThemeProvider theme={useStyles}>
   <Layout />
   </MuiThemeProvider>
  );
};

export default App;
