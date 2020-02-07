import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Divider from '@material-ui/core/Divider';
import Logo from "../assets/images/esito.png";

const useStyles = makeStyles(theme => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(30)
    },
    padding: theme.spacing(20),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: theme.spacing(8),
  },
  divider: {
    margin: theme.spacing(2, 25),
  },
  
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
    <React.Fragment>
      <Container maxWidth='md' component='footer' className={classes.footer}>
      <div>
            <img src={Logo} alt='Esito Logo' />
          </div>
        <Grid container spacing={0} justify='space-evenly'>
          {footers.map(footer => (
            <Grid item xs={6} sm={2}>
              <Typography variant='h4' color='textPrimary' gutterBottom>
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href='#' variant='subtitle1' color='textSecondary'>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
          <Grid item xs={12}>
              <Typography variant='h6' color='textPrimary' gutterBottom>
              </Typography>
                <Divider className={classes.divider} />
                  
                  <h3>Sanderakerveien 114A, 0402 Oslo</h3>
                
                  <h3>© Esito</h3>
            
          </Grid>
        </Grid>
        <Box mt={5}></Box>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
