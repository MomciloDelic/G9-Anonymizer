import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const NavbarStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  scroll: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 9999
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    background: "transparent",
    boxShadow: "none"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1,
    marginLeft: 25,
    marginTop: 25,
    letterSpacing: 3,
    textTransform: "uppercase"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    color: "#fe8e00",
    background: "#fff"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  menuIcon: {
    color: "#fe8e00",
    margin: "25px 0px 0 0"
  },
  desktopToolbar: {
    "& button": {
      color: "#fe8e00",
      margin: "25px 25px",
      fontSize: "1.2rem",
      textTransform: "none",
      borderRadius: "0",
      "&:hover": {
        backgroundColor: "#fff"
      },
      "& a": {
        "&:hover": {
          boxShadow: "inset 0 -2px 0 0 #000"
        }
      },
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    }
  },
  iconButton: {
    [theme.breakpoints.down("md")]: {
      display: "inline-flex"
    },
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  drawerButtons: {
    "& button": {
      display: "block",
      width: "100%"
    },
    "& a": {
      color: "#fff",
      textTransform: "none",
      fontSize: "1.5rem",
      borderRadius: 0,
      display: "block",
      width: "100%"
    }
  },
  close: {
    color: "#fff"
  },
  scrollIcon: {
    backgroundColor: "#fe8e00",
    color: "#000"
  },
  loginButton: {
    fontSize: "3.5rem",
    color: "#2b2626"
  }
}));

export default NavbarStyle;
