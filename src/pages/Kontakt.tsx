import * as React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import KontaktStyle from "../components/styles/KontaktStyle";
import Typography from "@material-ui/core/Typography";
import InputField from "../components/InputField";
import { Map, GoogleApiWrapper } from "google-maps-react";

const API_KEY = "AIzaSyCt4QEMg57h1c2Fsqd0zB_B4mPK3XT7zR8";
interface IKontaktProps {
  google: any;
  style: any;
}

interface IKontaktState {
  name: string;
  email: string;
  category: string;
  question: string;
  open: boolean;
  success: boolean;
  emailValid: boolean;
  nameValid: boolean;
  questionValid: boolean;
  errorText: object;
  validForm?: boolean;
}

const style = {
  width: "100%",
  height: "100%"
};

const useStyles = KontaktStyle;

class Kontakt extends React.Component<IKontaktProps, IKontaktState> {
  state = {
    name: "",
    email: "",
    category: "Billett",
    question: "",
    open: false,
    success: false,
    validForm: false,
    emailValid: false,
    nameValid: false,
    questionValid: false,
    errorText: { name: "", email: "", question: "" }
  };

  public handleChange = (e: any) => {
    const { name, value }: any = e.target;
    this.setState(
      {
        [name]: value
      } as any,
      () => {
        this.validateField(name, value);
      }
    );
  };

  private validateField = (fieldName: string, value: string) => {
    let { errorText, emailValid, nameValid, questionValid } = this.state;
    const epostRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const navnRegex = /^[a-zA-Z ]{2,30}$/;

    switch (fieldName) {
      case "email":
        emailValid = epostRegex.test(value);
        errorText.email = emailValid ? "" : "Eposten er ikke gyldig";
        break;
      case "name":
        nameValid = navnRegex.test(value) && value.length >= 3;
        errorText.name = nameValid
          ? ""
          : "Navnet kan kun innholde bokstaver og må være lengre enn 2 bokstaver";
        break;
      case "question":
        questionValid = value.length >= 10;
        errorText.question = questionValid
          ? ""
          : "Meldingen må være lengre enn 10 bokstaver";
        break;
      default:
        break;
    }
    this.setState(
      {
        errorText: errorText,
        emailValid: emailValid,
        nameValid: nameValid,
        questionValid: questionValid
      },
      this.validateForm
    );
  };

  private validateForm = () => {
    const { nameValid, emailValid, questionValid } = this.state;
    this.setState({ validForm: nameValid && emailValid && questionValid });
  };

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, category, question } = this.state;
    const postData = {
      Navn: name,
      Epost: email,
      kategori: category,
      Sporsmal: question
    };
  };

  public handleClose = () => {
    this.setState({
      open: false
    });
  };

  public renderBody = () => {
    const classes = useStyles();
    const {
      name,
      email,
      errorText,
      category,
      question,
      validForm
    } = this.state;
    return (
      <Container maxWidth='lg' className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Typography variant='h4' gutterBottom>
              Kontakt oss
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
              Hvis du har noen spørsmål eller ønsker informasjon, vennligst fyll
              inn din kontaktinformasjon i feltene.
            </Typography>
            <Typography variant='subtitle1'>
              Felter merket med * er påkrevd.
            </Typography>
          </Grid>

          <Paper className={classes.paper}>
            <Grid container justify='center' alignItems='center'>
              <form onSubmit={this.handleSubmit}>
                <Grid item>
                  <InputField
                    label='Navn *'
                    placeholder='Navn'
                    styles={classes.textField}
                    handleChange={this.handleChange}
                    value={name}
                    name='name'
                    error={errorText.name.length !== 0}
                    errorText={errorText.name}
                    multiline={false}
                    rows='1'
                  />
                </Grid>
                <Grid item>
                  <InputField
                    label='Epost *'
                    placeholder='Epost'
                    styles={classes.textField}
                    handleChange={this.handleChange}
                    value={email}
                    name='email'
                    error={errorText.email.length !== 0}
                    errorText={errorText.email}
                    multiline={false}
                    rows='1'
                  />
                </Grid>
                <Grid item>
                  <InputField
                    label='Firma'
                    placeholder='Firma'
                    styles={classes.textField}
                    handleChange={this.handleChange}
                    value={email}
                    name='firma'
                    error={errorText.email.length !== 0}
                    errorText={errorText.email}
                    multiline={false}
                    rows='1'
                  />
                </Grid>
                <Grid item>
                  <InputField
                    label='Adresse'
                    placeholder='Adresse'
                    styles={classes.textField}
                    handleChange={this.handleChange}
                    value={email}
                    name='adresse'
                    error={errorText.email.length !== 0}
                    errorText={errorText.email}
                    multiline={false}
                    rows='1'
                  />
                </Grid>
                <Grid item>
                  <InputField
                    label='By'
                    placeholder='By'
                    styles={classes.textField}
                    handleChange={this.handleChange}
                    value={email}
                    name='by'
                    error={errorText.email.length !== 0}
                    errorText={errorText.email}
                    multiline={false}
                    rows='1'
                  />
                </Grid>

                <Grid item>
                  <InputField
                    styles={classes.textField}
                    handleChange={this.handleChange}
                    value={question}
                    name='melding'
                    label='Melding*'
                    placeholder='Melding'
                    error={errorText.question.length !== 0}
                    errorText={errorText.question}
                    multiline={true}
                    rows='4'
                  />
                </Grid>
                <Button
                  variant='outlined'
                  className={classes.textField}
                  type='submit'
                  disabled={!validForm}
                >
                  Send
                </Button>
              </form>
            </Grid>
          </Paper>
        </Grid>

        <Grid container style={{ marginTop: "5rem" }}>
          <Grid item xs={12} sm={3}>
            <Typography variant='h6'>Epost</Typography>
            <Typography variant='subtitle1' gutterBottom>
              <Button href='mailto:adm@esito.no'>adm@esito.no</Button>
            </Typography>
            <Typography variant='h6'>Telefon</Typography>
            <Typography variant='subtitle1'>+47 2289 1000</Typography>
            <Typography variant='h6'>Besøksadresse</Typography>
            <Typography variant='subtitle1' style={{ marginBottom: "2rem" }}>
              Sandakerveien 114A
            </Typography>
            <Typography variant='h6'>Esito AS</Typography>
            <Typography variant='subtitle1'>PB 4384 Nydalen</Typography>
            <Typography variant='subtitle1'>0402 Oslo</Typography>
          </Grid>
          <Grid item sm={4} xs={12}>
            {/* <Map
              google={this.props.google}
              zoom={8}
              initialCenter={{ lat: 59.947501, lng: 10.770134 }}
              style={{ width: "40%", height: "60%" }}
            /> */}
          </Grid>
        </Grid>
      </Container>
    );
  };

  public render() {
    const { open, success } = this.state;
    return (
      <div>
        <this.renderBody />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCt4QEMg57h1c2Fsqd0zB_B4mPK3XT7zR8"
})(Kontakt);
