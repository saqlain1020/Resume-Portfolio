import React from "react";
import useStyles from "./useStyles";
import Img1 from "src/Assets/Images/me-(1).png";
import Img2 from "src/Assets/Images/me-(2).png";
import Img3 from "src/Assets/Images/me-(3).png";
import Img4 from "src/Assets/Images/me-(4).png";
import { Grid, Typography } from "@material-ui/core";
import ImageFade from "src/Components/ImageFade/ImageFade";
import MyButton from "src/Components/MyButton/MyButton";
import { Link } from "react-router-dom";

const Home = () => {
  const classes = useStyles();
  const arr = [Img1, Img2, Img3, Img4];

  return (
    <div className={classes.root}>
      <div className={`flex ${classes.imgWrapper}`}>
        <ImageFade sourceArray={arr} />
      </div>
      <div className={`flex ${classes.content}`}>
        <Typography variant="h3">
          <b>I'M SAQLAIN</b>
        </Typography>
        <Typography color="primary" style={{ marginTop: 5 }}>
          A friend, buddy and dude from earth
        </Typography>
        <Typography style={{ marginTop: 40, fontWeight: 500 }}>
          Euismod consulatu eos eu. Vocent facilis sensibus vel ut, quo an nihil
          qualisque.
          <br /> Mea eu nulla prompta. Dicat velit at usum, malis euismod vim an
        </Typography>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item>
            <Link to="/contact">
              <MyButton variant="contained">HIRE ME</MyButton>
            </Link>
          </Grid>
          <Grid item>
            <MyButton variant="outlined">DOWNLOAD RESUME</MyButton>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
