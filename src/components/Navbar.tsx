import React, { useState } from "react";
import clsx from "clsx";
import { Link as ScrollLink } from "react-scroll";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import Close from "@material-ui/icons/Close";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NavLink from "./NavLink";
import NavbarStyle from "./styles/NavbarStyle";
import Logo from "../assets/images/esito.png";

const useStyles = NavbarStyle;
function ScrollTop(props: any) {
  const { children } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  return (
    <Zoom in={trigger}>
      <div role='presentation' className={classes.scroll}>
        {children}
      </div>
    </Zoom>
  );
}

const Navbar = (props: any) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <div className={classes.title}>
            <img src={Logo} alt='Esito Logo' />
          </div>

          <Toolbar>
            <div>
              <Link href='#' className={classes.loginButton}>
                Login
                <AccountCircle />
              </Link>
            </div>
          </Toolbar>

          <div className={classes.iconButton}>
            <IconButton
              aria-label='open drawer'
              edge='end'
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Toolbar style={{ justifyContent: "center", alignContent: "center" }}>
        <div className={classes.desktopToolbar}>
          <NavLink toSection='About' text={"Tjenester"} />
          <NavLink toSection='Projects' text={"Om oss "} />
          <NavLink toSection='Projects' text={"Kontakt "} />
        </div>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='right'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <Close className={classes.close} />
          </IconButton>
        </div>
        <List>
          {["About", "Projects"].map(text => (
            <ListItem button key={text} className={classes.drawerButtons}>
              <NavLink
                toSection={text}
                text={text}
                handleDrawerClose={handleDrawerClose}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <ScrollTop {...props}>
        <ScrollLink
          activeClass='active'
          to='Home'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Fab
            size='small'
            aria-label='scroll back to top'
            className={classes.scrollIcon}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollLink>
      </ScrollTop>
    </div>
  );
};

export default Navbar;
