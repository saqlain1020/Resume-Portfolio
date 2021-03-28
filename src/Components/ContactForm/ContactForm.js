import React from "react";
import { Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import MyButton from "../MyButton/MyButton";

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

const ContactForm = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleInput = (e) => {
    console.log(e.target.name);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
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
              Submit
            </MyButton>
          </center>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
