import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));
  
  const tiers = [
    {
      title: 'Free',
      price: '0',
      description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
      buttonText: 'LES MER',
      buttonVariant: 'outlined',
    },
    {
      title: 'Pro',
      subheader: 'Most popular',
      price: '1500',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      ],
      buttonText: 'LES MER',
      buttonVariant: 'contained',
    },
    {
      title: 'Enterprise',
      price: '3000',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      ],
      buttonText: 'LES MER',
      buttonVariant: 'outlined',
    },
  ];
  const footers = [
    {
      title: 'Om oss',
      description: ['Inmeta'],
    },
    {
      title: 'Om oss',
      description: ['Inmeta'],
    },
    {
      title: 'Om oss',
      description: ['Inmeta'],
    },
    {
      title: 'Om oss',
      description: ['Inmeta'],
    },
  ];

const Layout: React.FC = () => {

    const  classes = useStyles();

    return (
        <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              Esito
            </Typography>
            <nav>
              <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Tjenester
              </Link>
              <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Om Oss
              </Link>
              <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Kontakt
              </Link>
            </nav>
            <Button href="#" color="primary" variant="outlined" className={classes.link}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        {/* Hero unit */}
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Slagord
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" component="p">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Typography>
        </Container>
        <Container maxWidth="md" component="main">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Slagord
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" component="p">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Typography>
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map(tier => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h4" color="textPrimary">
                        NOK{tier.price}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        /mnd
                      </Typography>
                    </div>
                    <ul>
                      {tier.description.map(line => (
                        <Typography component="li" variant="subtitle1" align="center" key={line}>
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth color="primary">
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Demo
          </Typography>
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map(tier => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3" color="textPrimary">
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        /mo
                      </Typography>
                    </div>
                    <ul>
                      {tier.description.map(line => (
                        <Typography component="li" variant="subtitle1" align="center" key={line}>
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth color="primary">
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Footer */}
        <Container maxWidth="md" component="footer" className={classes.footer}>
          <Grid container spacing={4} justify="space-evenly">
            {footers.map(footer => (
              <Grid item xs={6} sm={3}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  Om oss
                </Typography>
                <ul>
                  {footer.description.map(item => (
                    <li key={item}>
                      <Link href="#" variant="subtitle1" color="textSecondary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Box mt={5}>

          </Box>
        </Container>
        {/* End footer */}
      </React.Fragment>
    )
}

export default Layout;