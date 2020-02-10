import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Typography, Container, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "block",
      alignItems: "center",
      justifyContent: "center",
      overflow: "scroll"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: 0,
      minHeight: "100vh"
    },
    button: {
      color: "#fe8e00",
      fontSize: "1.2rem"
    },
    title: {
      color: "#fe8e00"
    },
    img: {
      display: "block",
      margin: "auto"
    },
    close: {
      position: "absolute",
      top: "1rem",
      right: "2rem",
      fontSize: "4rem"
    },
    info: {
      display: "block",
      margin: "auto",
      width: "80%"
    }
  })
);

const FeaturesModal = ({ buttonText, title, info, modalImg }: any) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen} fullWidth>
        {buttonText}
      </Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography
              className={classes.title}
              id='transition-modal-title'
              variant='h2'
              align='center'
            >
              {title}
            </Typography>
            <IconButton
              className={classes.close}
              disableFocusRipple
              disableTouchRipple
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <Container maxWidth='md'>
              <div className={classes.info}>{info}</div>
              <img className={classes.img} src={modalImg} alt='Feature image' />
            </Container>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default FeaturesModal;
