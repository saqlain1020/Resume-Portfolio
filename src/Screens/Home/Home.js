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
import CVLink from "src/Assets/Saqlain_CV.pdf";

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
          Hire the right talent and everything takes care of itself.
        </Typography>
        <Typography className={classes.para}>
          I'm an experienced developer working on React JS, NodeJS.
          <br />
          Proficient in utilizing modern web techniques and technologies in
          transforming your ideas to a beautiful working web interface.
          <br />
          Always working hard with ambitions which lead to higher grounds.
        </Typography>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item>
            <Link to="/contact">
              <MyButton variant="contained">HIRE ME</MyButton>
            </Link>
          </Grid>
          <Grid item>
            <a href={CVLink} download="Saqlain_CV.pdf">
              <MyButton variant="outlined">DOWNLOAD RESUME</MyButton>
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
