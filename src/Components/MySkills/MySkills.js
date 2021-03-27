import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import CustomProgressBar from "../CustomProgressBar/CustomProgressBar";

const useStyles = makeStyles((theme) => ({
  root: {
    
    marginTop:30,
  },
}));

const skills = [
  {
    title: "HTML/CSS",
    value: 90,
  },
  {
    title: "HTML/CSS",
    value: 80,
  },
  {
    title: "HTML/CSS",
    value: 80,
  },
  {
    title: "HTML/CSS",
    value: 90,
  },
  {
    title: "HTML/CSS",
    value: 50,
  },
  {
    title: "HTML/CSS",
    value: 20,
  },
];

const MySkills = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">
        <b>MY SKILLS</b>
      </Typography>
      <Typography color="primary" style={{ marginTop: 5 }}>
        I've got really amazing skills
      </Typography>
      <Grid container spacing={4} style={{marginTop:20,}}>
        {skills.map((ele, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <CustomProgressBar {...ele} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MySkills;
