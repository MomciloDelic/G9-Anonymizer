import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

const HeaderContainer: React.FC = () => {

    const  classes = useStyles();

    return (
        <React.Fragment>
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Slagord
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" component="p">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Typography>
        </Container>
      </React.Fragment>
    )
}

export default HeaderContainer;