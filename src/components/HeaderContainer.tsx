import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  heroContent: {
    minHeight: "80vh",
    padding: "4rem",
    marginTop: "5rem"
  },
  button: {
    backgroundColor: "#000",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fe8e00"
    }
  }
}));

const HeaderContainer: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Typography style={{ color: "black" }} variant='h3' gutterBottom>
        <span style={{ color: "#ffa834", fontWeight: 400 }}>Anonymizer </span>
        turns domain
        <br />
        knowledge into code
      </Typography>

      <hr style={{ width: "30%", float: "left" }} />
      <br />
      <Typography
        variant='h5'
        color='textSecondary'
        component='p'
        style={{ margin: "2rem 0 2rem 0", width: "60%" }}
      >
        Innføring av GDPR har store konsekvenser for behandling av personlig og
        sensitiv data. Anonymizer gir støtte for enkelt å lage programmer som
        understøtter funksjonelle krav som GDPR pålegger og Anonymizer kan
        produsere databaser anonymisert for test- og utviklingspersonell
      </Typography>
      <Link to='/protected' style={{ textDecoration: "none" }}>
        <Button
          className={classes.button}
          variant='contained'
          color='inherit'
          size='large'
        >
          Start nå
        </Button>
      </Link>
    </div>
  );
};

export default HeaderContainer;
