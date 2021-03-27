import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import QuoteIco from "src/Assets/Icons/Quote.js";

const TestimonialCard = ({title,subTitle,para}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <QuoteIco className={classes.quoteIco} />
      <div className={classes.testimonialContainer}>
        <Typography className={classes.para}>
          {para}
        </Typography>
        <Typography className={classes.heading}>{title}</Typography>
        <Typography className={classes.subHeading}>{subTitle}</Typography>
      </div>
    </div>
  );
};

export default TestimonialCard;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingLeft: 40,
    margin:5,
  },
  quoteIco: {
    fill: theme.palette.primary.main,
    position: "absolute",
    width: 55,
    height: 55,
    top: 20,
    left: 10,
  },
  testimonialContainer: {
    padding: "20px 26px",
    boxShadow: "0 2px 6px 0 rgb(0 0 0 / 20%)",
    paddingLeft: 40,
  },
  para: {
    fontWeight: 500,
    fontSize: 14,
    color: theme.palette.text.light,
  },
  heading: {
    letterSpacing: 2,
    color: theme.palette.text.light,
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 1,
    marginTop: 25,
  },
  subHeading: {
    fontWeight: 500,
    fontSize: 12,
  },
}));
