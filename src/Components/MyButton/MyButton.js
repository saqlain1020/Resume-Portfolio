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
    borderRadius:25,
    color: "white",
    display: "inline-block",
    cursor: "pointer",
    transition: "box-shadow 300ms",
    userSelect: "none",
    outline: "none",
    "&:hover": {
      // 0px 16px 20px rgb(0 150 136 / 16%)
      boxShadow: `0px 16px 20px ${theme.palette.primary.main}29`,
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
    outline: "none",
    border: `3px solid transparent`,
    borderRadius:360,
    "&:hover": {
      border: `3px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },
  },
  disabled:{
    pointerEvents: "none",
    opacity: 0.5,
    filter: "saturate(0.5)",
  }
}));

const MyButton = (props) => {
  const classes = useStyles();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={`${props.variant === "contained" ? classes.primaryBtn : classes.outlinedBtn} ${
        props.className && props.className
      } ${props.disabled && classes.disabled}`}
    >
      <Typography className={classes.text}>{props.children}</Typography>
    </motion.button>
  );
};

export default MyButton;

