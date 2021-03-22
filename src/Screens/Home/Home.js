import React from "react";
import useStyles from "./useStyles";
import CrossfadeImage from "react-crossfade-image";
import Img1 from "src/Assets/Images/me-(1).png";
import Img2 from "src/Assets/Images/me-(2).png";
import Img3 from "src/Assets/Images/me-(3).png";
import Img4 from "src/Assets/Images/me-(4).png";
import { Typography } from "@material-ui/core";
import ImageFade from "src/Components/ImageFade/ImageFade";

const Home = () => {
  const classes = useStyles();
  const arr = [Img1, Img2, Img3, Img4];

  return (
    <div className={classes.root}>
      <div className={`flex ${classes.imgWrapper}`}>
        <ImageFade sourceArray={arr} />
      </div>
      <div>
        <Typography variant="h4">
          <b>I'M John Doe</b>
        </Typography>
        <Typography color="primary">
          A friend, buddy and dude from earth
        </Typography>
      </div>
    </div>
  );
};

export default Home;
