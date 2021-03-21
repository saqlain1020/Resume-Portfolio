import React from "react";
import useStyles from "./useStyles";
import CrossfadeImage from "react-crossfade-image";
import Img1 from "src/Assets/Images/me (1).png";
import Img2 from "src/Assets/Images/me (2).png";
import Img3 from "src/Assets/Images/me (3).png";
import Img4 from "src/Assets/Images/me (4).png";
import { Typography } from "@material-ui/core";

const arr = [Img1, Img2, Img3, Img4];

const Home = () => {
  const classes = useStyles();
  const [ src, setSrc] = React.useState(Img1);
  React.useEffect(() => {
    let i = 0;
    let interval = setInterval(() => {
        setSrc(arr[i]);
      i++;
      if (i === arr.length) i = 0;
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={classes.root}>
      <div className={`flex ${classes.imgWrapper}`}>
        <CrossfadeImage src={src} style={{height:"100%",width:"100%",objectFit:"cover",transform:"scale(1.5)"}}/>
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
