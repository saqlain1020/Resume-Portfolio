import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "inherit",
    fontWeight: 600,
    letterSpacing: 2,
  },
  primaryBtn: {
    background: theme.palette.primary.main,
    padding: "10px 25px",
    color: "white",
    display: "inline-block",
    cursor: "pointer",
    transition: "box-shadow 300ms",
    userSelect: "none",
    "&:hover": {
      boxShadow: "0px 3px 15px rgba(0,0,0,0.3)",
    },
  },
  outlinedBtn: {
    background: "transparent",
    padding: "7px 22px",
    color: "rgba(0,0,0,.45)",
    display: "inline-block",
    cursor: "pointer",
    transition: "border 300ms",
    userSelect: "none",
    border: `3px solid transparent`,
    "&:hover": {
      border: `3px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },
  },
}));

const MyButton = (props) => {
  const classes = useStyles();

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={
        props.variant === "contained" ? classes.primaryBtn : classes.outlinedBtn
      }
    >
      <Typography className={classes.text}>{props.children}</Typography>
    </motion.div>
  );
};

export default MyButton;
