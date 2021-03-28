import React from "react";
import {
  Grid,
  makeStyles,
  Paper,
  Slide,
  TextField,
  Typography,
} from "@material-ui/core";
import MyButton from "../MyButton/MyButton";
import { init, send as sendMail } from "emailjs-com";
import Alert from "@material-ui/lab/Alert";
import { AnimatePresence, motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  textHeading: {
    paddingLeft: 8,
    marginTop: 10,
    marginBottom: 4,
    [theme.breakpoints.down("xs")]: {
      marginTop: 5,
    },
  },
  btn: {
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 10,
  },
}));

init("user_UfZdGnbnAi6ueK5aTIQxR");

const ContactForm = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [showAlert, setShowAlert] = React.useState(0);

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const alertHandle = (e) => {
    setShowAlert(e);
    setTimeout(() => setShowAlert(0), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      let res = await sendMail("service_kxunawl", "template_fzzvvtg", state);
      console.log(res);
      alertHandle(1);
    } catch (err) {
      console.log(err);
      alertHandle(2);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography color="textPrimary" className={classes.textHeading}>
            <b>Name:</b>
          </Typography>
          <TextField
            name="name"
            type="text"
            value={state.name}
            variant="outlined"
            fullWidth
            placeholder="Name"
            required
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textPrimary" className={classes.textHeading}>
            <b>Email:</b>
          </Typography>
          <TextField
            name="email"
            type="email"
            value={state.email}
            variant="outlined"
            fullWidth
            placeholder="Email"
            required
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography color="textPrimary" className={classes.textHeading}>
            <b>Subject:</b>
          </Typography>
          <TextField
            name="subject"
            type="text"
            value={state.subject}
            variant="outlined"
            fullWidth
            placeholder="Subject"
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography color="textPrimary" className={classes.textHeading}>
            <b>Message:</b>
          </Typography>
          <TextField
            name="message"
            value={state.message}
            type="text"
            variant="outlined"
            fullWidth
            multiline
            rows={6}
            placeholder="Message"
            required
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <center>
            <MyButton variant="contained" className={classes.btn} type="submit">
              SUBMIT
            </MyButton>
          </center>
        </Grid>
        <Grid item xs={12}>
          <AnimatePresence>
            {showAlert === 1 && (
              <motion.div
                key="success"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Alert variant="filled" severity="success">
                  Your message sent successfully
                </Alert>
              </motion.div>
            )}
            {showAlert === 2 && (
              <motion.div
                key="error"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Alert variant="filled" severity="error">
                  Error sending message
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
