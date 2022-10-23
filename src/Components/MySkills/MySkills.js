import React from "react";
import { Chip, Grid, makeStyles, Typography } from "@material-ui/core";
import CustomProgressBar from "../CustomProgressBar/CustomProgressBar";
import { allSkills, skills } from "src/Data";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
  },
  smallHeading: {
    color: "#333333",
    marginTop: 24,
  },
  chip: {
    background: `${theme.palette.primary.main}20`,
    padding: "2px 14px",
    fontSize: 15,
    fontWeight: 600,
    color: "rgba(0,0,0,0.5)",
    // textTransform: "uppercase",
    fontFamily: "'Poppins', sans-serif",
    borderRadius: 360,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    "&:hover": {
      background: `${theme.palette.primary.main}50`,
    },

  },
  dot:{
    width:5,
    height:5,
    background:theme.palette.primary.main,
    borderRadius:360,marginRight:8,
  }
}));

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
      {allSkills.map(({ title, skills }) => (
        <>
          <Typography variant="h6" className={classes.smallHeading}>
            <b>{title}:</b>
          </Typography>
          <Grid container spacing={2} style={{ marginTop: 2 }}>
            {skills.map((name) => (
              <Grid item>
                <div className={classes.chip}><div className={classes.dot}></div>{name}</div>
              </Grid>
            ))}
          </Grid>
        </>
      ))}

      {/* <Grid container spacing={4} style={{ marginTop: 20 }}>
        {skills.map((ele, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <CustomProgressBar {...ele} />
          </Grid>
        ))}
      </Grid> */}
    </div>
  );
};

export default MySkills;
