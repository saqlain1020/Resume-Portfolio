import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import ResumeCard from "src/Components/ResumeCard/ResumeCard";
import CustomCarousel from "src/Components/CustomCarousel/CustomCarousel";
import TestimonialCard from "src/Components/TestimonialCard/TestimonialCard";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import {education,experience} from 'src/Data'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 70,
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  resumeCardsContainer: {
    marginTop: 20,
  },
}));


const Resume = () => {
  const classes = useStyles();

  return (
    <motion.div
      className={classes.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Typography variant="h4">
        <b>MY EDUCATION</b>
      </Typography>
      <Typography color="primary" style={{ marginTop: 5 }}>
        Take a look at the places where I've studied
      </Typography>
      <div className={classes.resumeCardsContainer}>
        {education.map((ele, index) => (
          <ResumeCard key={index} {...ele} />
        ))}
      </div>
      <Typography variant="h4" style={{ marginTop: 30 }}>
        <b>MY EXPERIENCE</b>
      </Typography>
      <Typography color="primary" style={{ marginTop: 5 }}>
        Take a look at the places where I've worked
      </Typography>
      <div className={classes.resumeCardsContainer}>
        <Fade bottom>
          {experience.map((ele, index) => (
            <ResumeCard key={index} {...ele} />
          ))}
        </Fade>
      </div>
      <Typography variant="h4" style={{ marginTop: 30 }}>
        <b>Testimonials</b>
      </Typography>
      <Typography color="primary" style={{ marginTop: 5, marginBottom: 20 }}>
        Take a look at what other people say about me
      </Typography>
      <CustomCarousel>
        {education.map((ele, index) => (
          <TestimonialCard key={index} {...ele} />
        ))}
      </CustomCarousel>
    </motion.div>
  );
};

export default Resume;
