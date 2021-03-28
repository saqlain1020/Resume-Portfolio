import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import ContactForm from "src/Components/ContactForm/ContactForm";
import ContactIcons from "src/Components/ContactIcons/ContactIcons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 70,
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gridTemplateAreas: '"form icons"',
    marginTop: 50,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "max-content 1fr",
      gridTemplateAreas: '"icons""form"',
      marginTop: 20,
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">
        <b>CONTACT ME</b>
      </Typography>
      <Typography color="primary" style={{ marginTop: 5 }}>
        You can message me to discuss on a project or just to say hi
      </Typography>
      <div className={classes.grid}>
        <div style={{ gridArea: "form" }}>
          <ContactForm />
        </div>
        <div style={{ gridArea: "icons" }}>
          <ContactIcons />
        </div>
      </div>
    </div>
  );
};

export default Contact;
