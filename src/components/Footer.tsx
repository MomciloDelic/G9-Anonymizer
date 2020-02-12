import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Logo from "../assets/images/esito.png";

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  },
  footer: {
    backgroundColor: "#1a1a1a",
    marginTop: "10rem",
    color: "#fff",
    overflowX: "hidden"
  },
  grid: {
    marginTop: "5rem"
  },
  link: {
    color: "#fe8e00",
    "&:hover": {
      color: "#fff",
      textDecoration: "underline"
    },
    padding: 0,
    margin: 0
  },
  img: {
    marginTop: "4rem"
  }
}));

const footers = [
  {
    title: "Tjenester",
    description: ["Tjenester"]
  },
  {
    title: "Om oss",
    description: ["Om oss"]
  },
  {
    title: "Kontakt",
    description: ["Kontakt"]
  }
];

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Grid className={classes.grid} container justify='center' direction='row'>
        <Grid item md={2} xs={7}>
          <Typography variant='h6' gutterBottom>
            Esito AS
          </Typography>

          <Typography variant='subtitle1' gutterBottom>
            Datterselskap av
          </Typography>
          <Button
            className={classes.link}
            disableTouchRipple
            href='https://www.inmeta.no'
            target='_blank'
          >
            Inmeta Consulting
          </Button>
        </Grid>
        <Grid item md={2} xs={7}>
          <Typography variant='subtitle1' gutterBottom>
            Sanderakerveien 114 A
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
            PB 4384 Nydalen
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
            0402 Oslo
          </Typography>
        </Grid>
        <Grid item md={2} xs={7}>
          <Typography variant='subtitle1' gutterBottom>
            Telefon +47 2289 1000
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
            E-post:
            <Button
              className={classes.link}
              href='mailto:adm@esito.no'
              disableTouchRipple
              style={{ paddingLeft: "0.5rem" }}
            >
              adm@esito.no
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <img className={classes.img} src={Logo} alt='Esito Logo' />
    </div>
  );
};

export default Footer;
