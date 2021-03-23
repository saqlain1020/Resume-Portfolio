import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import "src/Flip.css";

const useStyles = makeStyles((theme) => ({
  root: {
    perspective: "1000px",
    height:140,
    width:140,
    cursor:"pointer",
    margin:10,
  },
  front:{
    height:140,
    width:140,
    borderRadius:360,
    background: "#F0F0F0"
  },
  back:{
    height:140,
    width:140,
    borderRadius:360,
    background: theme.palette.primary.main,
  },
  text:{
      fontSize:17,
      color: "white",
      letterSpacing:1.5,
      fontWeight:600,
  }
}));

const MenuCard = ({title,icon}) => {
  const classes = useStyles();

  return (
    <div className={`flip-container ${classes.root}`}>
      <div className={`flip-card`}>
        <div className={`flip-card-front`}>
          <div className={`flip-content flex ${classes.front}`}>
              <img src={icon} alt="" width="50px"/>
          </div>
        </div>
        <div className={`flip-card-back`}>
          <div className={`flip-content flex ${classes.back}`}>
              <Typography className={classes.text}>
                  {title}
              </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
