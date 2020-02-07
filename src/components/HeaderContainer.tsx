import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  }
}));

const HeaderContainer: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth='lg' component='main' className={classes.heroContent}>
        <div style={{ padding: "50px", paddingBottom: "90px" }}>
          <Typography
            style={{ color: "#ffa834" }}
            component='h3'
            variant='h3'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            SLAGORD? Valg av tjeneste og abonnement?
          </Typography>
          <br />
          <br />
          <Typography
            variant='h5'
            align='center'
            color='textSecondary'
            component='p'
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer. Lorem Ipsum has been the
            industry's standard.
          </Typography>
        </div>
        <hr style={{ width: "20%" }} />
      </Container>
    </React.Fragment>
  );
};

export default HeaderContainer;
