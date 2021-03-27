import React from "react";
import { LinearProgress, makeStyles, Typography } from "@material-ui/core";
import { useCountUp } from "react-countup";

const useStyles = makeStyles((theme) => ({
  progressTitle: {
    letterSpacing: 2,
    color: "#222",
    fontWeight: 600,
    marginBottom:5,
  },
}));

const CustomProgressBar = ({ title, value }) => {
  const classes = useStyles();
  const { countUp } = useCountUp({ end: value });

  return (
    <>
      <Typography className={classes.progressTitle}>{title}</Typography>
      <LinearProgress variant="determinate" value={Number(countUp)} />
    </>
  );
};

export default CustomProgressBar;
