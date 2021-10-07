import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import PortfolioCard from "src/Components/PortfolioCard/PortfolioCard";
import { portfolio as data } from "src/Data";

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
      <Typography color="primary" style={{ marginTop: 0 }}>
        <small>Note: Many more products i may be working on now are not available for public disclosure</small>
      </Typography>
      <Grid container spacing={3} style={{ marginTop: 20 }}>
        {data.map((ele, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <PortfolioCard {...ele} key={index} />
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Portfolio;
