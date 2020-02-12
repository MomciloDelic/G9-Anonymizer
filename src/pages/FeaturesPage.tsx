import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import GdprIcon from "../assets/images/gdpr.svg";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: "50vh",
      [theme.breakpoints.down("md")]: {
        marginTop: "10rem"
      },
      overflow: "hidden"
    },
    paper: {
      textAlign: "center",
      boxShadow: "none",
      width: "20rem",
      backgroundColor: "#fafafa"
    },
    title: {
      marginBottom: "5rem",
      color: "#fe8e00",
      fontWeight: 400,
      textTransform: "uppercase"
    },
    gridTitle: {
      marginBottom: "1rem",
      color: "#fe8e00"
    }
  })
);

const features = [
  {
    title: "Sikkerhet",
    text: "Beskytt sensitive data på en sikker og robust måte",
    icon: <VerifiedUserIcon style={{ fontSize: "3.125rem" }} />
  },
  {
    title: "GDPR",
    text:
      "Masker dine private og sensetive data enkelt! Etterlev GDPR og personvernlovgivning på få klikk",
    icon: <img src={GdprIcon} height='50vh' />
  },
  {
    title: "Fiktiv data",
    text:
      "Generer test data rett fra produksjonsdatabasen for test- og utviklingspersonell",
    icon: <DataUsageIcon style={{ fontSize: "3.125rem" }} />
  }
];

const FeaturesPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h4' align='center'>
        Fordeler med datamaskering og anonymisering
      </Typography>
      <Grid container justify='center' spacing={10}>
        {features.map(feature => (
          <Grid key={feature.title} item>
            <Paper className={classes.paper}>
              {feature.icon}
              <Typography className={classes.gridTitle} variant='h4'>
                {feature.title}
              </Typography>
              <Typography variant='h6'>{feature.text}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeaturesPage;
