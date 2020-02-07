import React from 'react';
import Grid from '@material-ui/core/Grid';
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

const Footer: React.FC = () => {

    const  classes = useStyles();

    return (
        <React.Fragment>
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
      </React.Fragment>
    )
}

export default Footer;