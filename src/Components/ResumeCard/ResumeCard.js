import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const ResumeCard = ({ title, subTitle, para }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.circleWrapper}>
        <div className={classes.innerCircle}></div>
      </div>
      <div className={classes.leftLine}></div>
      <div className={classes.contentWrapper}>
        <Typography className={classes.heading}>{title}</Typography>
        <Typography className={classes.subHeading}>{subTitle}</Typography>
        <Typography className={classes.para}>{para}</Typography>
      </div>
    </div>
  );
};

export default ResumeCard;

const useStyles = makeStyles((theme) => ({
  root: {
    borderLeft: `1px solid rgba(0,0,0,0.1)`,
    padding: "40px 0px",
    position: "relative",
    display: "flex",
  },
  contentWrapper: {
    padding: 16,
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    boxShadow: "0 2px 6px 0 rgb(0 0 0 / 20%)",
    width: "100%",
  },
  circleWrapper: {
    borderRadius: "50%",
    height: 19,
    width: 19,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.primary.main,
    position: "absolute",
    left: -10,
    top: 50,
  },
  innerCircle: {
    width: "50%",
    height: "50%",
    borderRadius: "50%",
    background: "white",
  },
  leftLine: {
    width: 40,
    height: 2,
    background: theme.palette.primary.main,
    marginTop: 18,
  },
  heading: {
    letterSpacing: 2,
    color: theme.palette.text.light,
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 1,
  },
  subHeading: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    fontSize: 15,
  },
  para: {
    marginTop: 10,
    fontWeight: 500,
    fontSize: 14,
  },
}));
