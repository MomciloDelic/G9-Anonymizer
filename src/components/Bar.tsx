import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import NavbarStyle from "./styles/NavbarStyle";

const useStyles = NavbarStyle;

const Bar: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position='static'
        color='default'
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant='h6'
            color='inherit'
            noWrap
            className={classes.toolbarTitle}
          >
            Esito
          </Typography>
          <nav>
            <Link
              variant='button'
              color='textPrimary'
              href='#'
              className={classes.link}
            >
              Tjenester
            </Link>
            <Link
              variant='button'
              color='textPrimary'
              href='#'
              className={classes.link}
            >
              Om Oss
            </Link>
            <Link
              variant='button'
              color='textPrimary'
              href='#'
              className={classes.link}
            >
              Kontakt
            </Link>
          </nav>
          <Button
            href='#'
            color='primary'
            variant='outlined'
            className={classes.link}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Bar;
