import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  heroContent: {
    minHeight: "70vh"
  }
}));

const HeaderContainer: React.FC = () => {
  const classes = useStyles();

  return (
    <div
      style={{ padding: "5%", marginTop: "8%" }}
      className={classes.heroContent}
    >
      <Typography
        style={{ color: "black" }}
        component='h3'
        variant='h3'
        align='left'
        color='textPrimary'
        gutterBottom
      >
        <span style={{ color: "#ffa834" }}>Anonymizer </span> turns domain
        <br />
        knowledge into code
      </Typography>

      <hr style={{ width: "30%", float: "left" }} />
      <br />
      <Typography
        variant='h5'
        color='textSecondary'
        component='p'
        style={{ marginTop: "2rem", width: "60%" }}
      >
        Innføring av GDPR har store konsekvenser for behandling av personlig og
        sensitiv data. Anonymizer gir støtte for enkelt å lage programmer som
        understøtter funksjonelle krav som GDPR pålegger og g9 Anonymizer kan
        produsere databaser anonymisert for test- og utviklingspersonell
      </Typography>
    </div>
  );
};

export default HeaderContainer;
