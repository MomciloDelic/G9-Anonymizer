import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    minHeight: "70vh"
  },
}));

const HeaderContainer: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth='lg' component='main' className={classes.heroContent}>
        <div style={{ margin: "3%"}}>
          <Typography
            style={{ color: "black"}}
            component='h3'
            variant='h3'
            align='left'
            color='textPrimary'
            gutterBottom
          >
            <span style={{ color: "#ffa834" }}>Anonymizer </span> turns domain <br/>knowledge into code
          </Typography>
          <br />
          <br />
{/*           <Typography
            variant='h5'
            align='center'
            color='textSecondary'
            component='p'
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer. Lorem Ipsum has been the
            industry's standard.
          </Typography> */}
          <hr style={{ width: "30%", float: "left"}} />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default HeaderContainer;
