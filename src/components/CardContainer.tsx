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

import { dbmasker, dbimport, dbano } from "../assets/text/feature";
import FeatureModal from "./FeaturesModal";
import DbMasker from "../assets/images/dbmasker.png";

const useStyles = makeStyles(theme => ({
  root: {
    overflow: "hidden"
  },
  title: {
    color: "#fe8e00",
    margin: "0 0 4rem 0",
    fontWeight: 400,
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      marginTop: "8rem"
    }
  },
  card: {
    backgroundColor: "#fff"
  },
  cardHeader: {
    color: "#fe8e00"
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  button: {
    textAlign: "center",
    display: "block",
    margin: "auto"
  }
}));

const tiers = [
  {
    title: "DBano",
    price: "0",
    description: [
      "DBano genererer ANO-filer som beskriver databasestruktur ved bruk av ANO DSL-språket beskrevet i DBmasker ANO-syntaks."
    ],
    infoText: dbano.split("\n").map((i, key) => {
      return (
        <Typography variant='body1' key={key} style={{ marginTop: "1.5rem" }}>
          {i}
        </Typography>
      );
    }),
    buttonText: "LES MER",
    buttonVariant: "outlined"
  },
  {
    title: "DBimport",
    subheader: "Most popular",
    price: "1500",
    description: [
      "DBimport støtter omvendt konskruksjon av databaseskjemaer i Java-kildekode med JPA-merknader."
    ],
    infoText: dbimport.split("\n").map((i, key) => {
      return (
        <Typography variant='body1' key={key} style={{ marginTop: "1.5rem" }}>
          {i}
        </Typography>
      );
    }),
    buttonText: "LES MER",
    buttonVariant: "contained"
  },
  {
    title: "DBmasker",
    price: "3000",
    description: [
      "DBmasker er en tjeneste som hjelper bedrifter håndtere oppgaver knyttet til maskering av data på en robust og sikker måte. "
    ],
    infoText: dbmasker.split("\n").map((i, key) => {
      return (
        <Typography key={key} style={{ marginTop: "1.5rem" }}>
          {i}
        </Typography>
      );
    }),
    buttonText: "LES MER",
    buttonVariant: "outlined"
  }
];

const CardContainer: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container id='tjenester' maxWidth='lg' component='main'>
        <Typography
          component='h1'
          variant='h4'
          align='center'
          gutterBottom
          className={classes.title}
        >
          Hva vi tilbyr
        </Typography>

        <Grid container spacing={10} alignItems='flex-end' justify='center'>
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={8}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card className={classes.card}>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component='h2' variant='h4' color='textPrimary'>
                      NOK {tier.price}
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
                <CardActions className={classes.button}>
                  <FeatureModal
                    buttonText='LES MER'
                    title={tier.title}
                    info={tier.infoText}
                    modalImg={DbMasker}
                  />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CardContainer;
