import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 70,
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <motion.div
      className={classes.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Typography variant="h4">
        <b>PORTFOLIO</b>
      </Typography>
      <Typography color="primary" style={{ marginTop: 5 }}>
        See my latest projects I've been working on
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
            
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Portfolio;
