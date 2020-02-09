import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import FeatureModal from "./FeaturesModal";

const useStyles = makeStyles(theme => ({
  title: {
    color: "#fe8e00",
    margin: "0 0 4rem 0"
  },
  cardHeader: {
    color: "#fe8e00"
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  }
}));

const tiers = [
  {
    title: "DBano",
    price: "0",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ],
    buttonText: "LES MER",
    buttonVariant: "outlined"
  },
  {
    title: "DBimport",
    subheader: "Most popular",
    price: "1500",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ],
    buttonText: "LES MER",
    buttonVariant: "contained"
  },
  {
    title: "DBmasker",
    price: "3000",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ],
    buttonText: "LES MER",
    buttonVariant: "outlined"
  }
];

const CardContainer: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth='lg' component='main'>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          gutterBottom
          className={classes.title}
        >
          Tjenester
        </Typography>

        <Grid container spacing={5} alignItems='flex-end'>
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component='h2' variant='h4' color='textPrimary'>
                      NOK{tier.price}
                    </Typography>
                    <Typography variant='h6' color='textSecondary'>
                      /mnd
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography
                        component='li'
                        variant='subtitle1'
                        align='center'
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <FeatureModal
                    buttonText='LES MER'
                    title={tier.title}
                    info={tier.description}
                  />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default CardContainer;
