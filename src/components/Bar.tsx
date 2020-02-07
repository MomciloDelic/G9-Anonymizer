import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

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
      title: '1 mnd',
      subheader: 'Most popular',
      price: '1500',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      ],
      buttonText: 'LES MER',
      buttonVariant: 'contained',
    },
    {
      title: '3 mnd',
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

const Bar: React.FC = () => {

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
      </React.Fragment>
    )
}

export default Bar;