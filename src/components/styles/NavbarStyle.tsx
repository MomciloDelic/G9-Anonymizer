import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const NavbarStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  scroll: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
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
    marginLeft: 25
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
    background: "#fafafa"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  drawerLink: {
    textDecoration: "none"
  },
  menuIcon: {
    color: "#fe8e00",
    margin: "25px 0px 0 0"
  },
  desktopToolbar: {
    "& a": {
      textDecoration: "none"
    },
    "& button": {
      color: "#fe8e00",
      margin: "25px 25px",
      fontSize: "1.2rem",
      textTransform: "none",
      borderRadius: "0",
      textDecoration: "none",

      "&:hover": {
        boxShadow: "inset 0 -2px 0 0 #000",
        backgroundColor: "#fafafa"
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
    "& a": {
      color: "#000",
      textTransform: "none",
      textDecoration: "none",
      fontSize: "1.5rem",
      borderRadius: 0,
      display: "block",
      width: "100%",
      textAlign: "center"
    }
  },
  close: {
    color: "#000"
  },
  scrollIcon: {
    backgroundColor: "#fe8e00",
    color: "#000"
  },
  loginButton: {
    fontSize: "2rem",
    color: "#2b2626",
    marginLeft: "0.5rem"
  }
}));

export default NavbarStyle;
