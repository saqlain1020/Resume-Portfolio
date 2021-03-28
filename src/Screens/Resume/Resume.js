import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import ResumeCard from "src/Components/ResumeCard/ResumeCard";
import CustomCarousel from "src/Components/CustomCarousel/CustomCarousel";
import TestimonialCard from "src/Components/TestimonialCard/TestimonialCard";

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

const education = [
  {
    title: "CSS COLLEGE",
    subTitle: "Masters - 2014 to 2018",
    para:
      "Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed.",
  },
  {
    title: "CSS COLLEGE",
    subTitle: "Masters - 2014 to 2018",
    para:
      "Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed.",
  },
  {
    title: "CSS COLLEGE",
    subTitle: "Masters - 2014 to 2018",
    para:
      "Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed.",
  },
];

const Resume = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
        {education.map((ele, index) => (
          <ResumeCard key={index} {...ele} />
        ))}
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
    </div>
  );
};

export default Resume;