import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import PhotoLibraryOutlinedIcon from "@material-ui/icons/PhotoLibraryOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
    margin: 10,
    boxShadow: "0 1px 4px 0 rgb(0 0 0 / 20%)",
    background: "white",
    transition: "all .3s ease",
    "&:hover": {
      boxShadow: "0 15px 50px 0 rgb(0 0 0 / 14%)",
    },
  },
  heading: {
    fontSize: 20,
    letterSpacing: 2,
    marginTop: 20,
  },
  icon: {
    width: 60,
    height: 60,
    color: theme.palette.text.light,
  },
  para: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 600,
  },
}));

const ServiceCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PhotoLibraryOutlinedIcon className={classes.icon} />
      <Typography variant="h4" className={classes.heading}>
        <b>PHOTOGRAPHY</b>
      </Typography>
      <Typography className={classes.para}>
        Nam reformidans vituper atori bus at. Id nisl diceret maiestatis qui,
        mel affert doctus te.
      </Typography>
    </div>
  );
};

export default ServiceCard;
