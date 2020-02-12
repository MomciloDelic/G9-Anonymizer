import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

const KontaktStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "4rem"
    },
    title: {
      textAlign: "center",
      paddingTop: "2rem",
      color: "#fff"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400,
      marginBottom: "1rem"
    },
    menu: {
      width: 200
    },
    paper: {
      padding: "2px 4px",
      display: "flex",
      margin: "1rem auto 0 auto",
      alignItems: "center",
      width: 500
    }
  })
);

export default KontaktStyle;
