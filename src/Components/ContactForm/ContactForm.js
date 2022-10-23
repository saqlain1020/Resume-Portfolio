import React from "react";
import { Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import MyButton from "../MyButton/MyButton";
import { init, send as sendMail } from "emailjs-com";
import Alert from "@material-ui/lab/Alert";
import { AnimatePresence, motion } from "framer-motion";
import useAnalyticsEventTracker from "src/Hooks/useAnalyticsEventTracker";

const useStyles = makeStyles((theme) => ({
  textHeading: {
    paddingLeft: 5,
    marginTop: 10,
    marginBottom: 4,
    color: "#717171",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      marginTop: 5,
    },
  },
  textField: {
    "& div": {
      background: theme.palette.primary.light,
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
  const gaEvenTracker = useAnalyticsEventTracker("Contact Form");
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [showAlert, setShowAlert] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

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
      gaEvenTracker("Submit");
      setLoading(true);
      let res = await sendMail("service_7vupatn", "template_fzzvvtg", state);
      setLoading(false);
      console.log(res);
      alertHandle(1);
    } catch (err) {
      setLoading(false);
      console.log(err);
      alertHandle(2);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography color="textPrimary" className={classes.textHeading}>
            Name:
          </Typography>
          <TextField
            name="name"
            type="text"
            value={state.name}
            variant="outlined"
            fullWidth
            required
            className={classes.textField}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textPrimary" className={classes.textHeading}>
            Email:
          </Typography>
          <TextField
            name="email"
            type="email"
            value={state.email}
            variant="outlined"
            fullWidth
            required
            className={classes.textField}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography color="textPrimary" className={classes.textHeading}>
            Subject:
          </Typography>
          <TextField
            name="subject"
            type="text"
            value={state.subject}
            variant="outlined"
            fullWidth
            className={classes.textField}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography color="textPrimary" className={classes.textHeading}>
            Message:
          </Typography>
          <TextField
            name="message"
            value={state.message}
            type="text"
            variant="outlined"
            fullWidth
            multiline
            rows={6}
            required
            className={classes.textField}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <center>
            <MyButton disabled={loading} variant="contained" className={classes.btn} type="submit">
              SUBMIT
            </MyButton>
          </center>
        </Grid>
        <Grid item xs={12}>
          <AnimatePresence>
            {showAlert === 1 && (
              <motion.div key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Alert variant="filled" severity="success">
                  Your message sent successfully
                </Alert>
              </motion.div>
            )}
            {showAlert === 2 && (
              <motion.div key="error" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
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
