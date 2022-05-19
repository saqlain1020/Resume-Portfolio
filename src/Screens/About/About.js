import React from "react";
import { Divider, Grid, Typography } from "@material-ui/core";
import useStyles from "./useStyles";
import ServiceCard from "src/Components/ServiceCard/ServiceCard";
import MySkills from "src/Components/MySkills/MySkills";
import { motion } from "framer-motion";
import { services } from "src/Data";

let bth = new Date("24 JAN 2000");

// Calculate the difference in years between two dates
let diff_years = new Date().getFullYear() - bth.getFullYear();
const About = () => {
  const classes = useStyles();

  return (
    <motion.div
      className={classes.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Typography variant="h4">
        <b>ABOUT ME</b>
      </Typography>
      <Typography color="primary" style={{ marginTop: 5 }}>
        I'm a dude with experience
      </Typography>
      <Grid container spacing={6} className={classes.nameContainers}>
        <Grid item xs={12} md={4}>
          <div>
            <Typography className={classes.aboutText}>
              <b>NAME:</b> Saqlain Riaz
            </Typography>
            <Divider />
            <Typography className={classes.aboutText}>
              <b>JOB:</b> Senior Frontend Developer
            </Typography>
            <Divider />
            <Typography className={classes.aboutText}>
              <b>Age:</b> {diff_years} Years
            </Typography>
            <Divider />
            <Typography className={classes.aboutText}>
              <b>HOMETOWN:</b> Karachi
            </Typography>
            <Divider />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography className={classes.aboutPara}>
            I’m Saqlain an ambitious problem solver with a passion for learning
            and implementing new solutions, and who like to be in party of
            like-minded developers. Experienced in creating logical and
            innovative solutions to complex problems.
            <br />
            <br />
            My goal is to climb the ladder and become one of the leading experts
            in my field, who want's to be a part of something bigger.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h4" style={{ marginTop: 20 }}>
        <b>MY SERVICES</b>
      </Typography>
      <Typography color="primary" style={{ marginTop: 5 }}>
        I provide amazing and high quality services
      </Typography>
      <div className={classes.servicesGrid}>
        {services.map((ele, index) => (
          <ServiceCard {...ele} key={index} />
        ))}
      </div>
      <MySkills />
    </motion.div>
  );
};

export default About;
