import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import { motion } from "framer-motion";
import FiverIco from "src/Assets/Icons/FiverrIco";
import LinkedinIco from "src/Assets/Icons/LinkedinIco";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 40,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  icon: {
    color: theme.palette.primary.main,
    fill: theme.palette.primary.main,
    height: 50,
    width: 50,
    padding: 10,
    background: "white",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    borderRadius: 360,
    marginRight: 10,
    transition: "all 200ms",
    "&:hover": {
      boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
    },
  },
  item: {
    justifyContent: "flex-start",
    marginBottom: 20,
  },
}));
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const items = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const ContactIcons = () => {
  const classes = useStyles();

  return (
    <motion.div variants={container} initial="hidden" animate="visible" className={classes.root}>
      <motion.div variants={items} className={`flex ${classes.item}`}>
        <a href="https://github.com/saqlain1020" target="_blank">
          <GitHubIcon className={classes.icon} />
        </a>
        <Typography>github.com/saqlain1020</Typography>
      </motion.div>
      <motion.div variants={items} className={`flex ${classes.item}`}>
        <a href="https://www.linkedin.com/in/saqlain1020/" target="_blank">
          <LinkedinIco className={classes.icon} />
        </a>
        <Typography>linkedin.com/in/saqlain1020</Typography>
      </motion.div>
      <motion.div variants={items} className={`flex ${classes.item}`}>
        <a href="tel:+923000580479" target="_blank">
          <PhoneIcon className={classes.icon} />
        </a>
        <Typography>+92 300 0580479</Typography>
      </motion.div>
      <motion.div variants={items} className={`flex ${classes.item}`}>
        <a href="mailto:saqlainprinters@gmail.com" target="_blank">
          <MailIcon className={classes.icon} />
        </a>
        <Typography>saqlainprinters@gmail.com</Typography>
      </motion.div>
      <motion.div variants={items} className={`flex ${classes.item}`}>
        <a href="https://saqlain1020.com" target="_blank">
          <LanguageIcon className={classes.icon} />
        </a>
        <Typography>saqlain1020.com</Typography>
      </motion.div>
    </motion.div>
  );
};

export default ContactIcons;

