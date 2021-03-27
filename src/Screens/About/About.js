import React from "react";
import { Divider, Grid, Typography } from "@material-ui/core";
import useStyles from "./useStyles";
import ServiceCard from "src/Components/ServiceCard/ServiceCard";
import MySkills from "src/Components/MySkills/MySkills";

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">
        <b>ABOUT ME</b>
      </Typography>
      <Typography color="primary" style={{ marginTop: 5 }}>
        I'm a good guy, not a bad guy
      </Typography>
      <Grid container spacing={6} className={classes.nameContainers}>
        <Grid item xs={12} md={4}>
          <div>
            <Typography className={classes.aboutText}>
              <b>NAME:</b> John Doe
            </Typography>
            <Divider />
            <Typography className={classes.aboutText}>
              <b>JOB:</b> Freelancer
            </Typography>
            <Divider />
            <Typography className={classes.aboutText}>
              <b>Age:</b> 21 Years
            </Typography>
            <Divider />
            <Typography className={classes.aboutText}>
              <b>HOMETOWN:</b> Dokri
            </Typography>
            <Divider />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography className={classes.aboutPara}>
            Consul latine iudicabit eu vel. Cu has animal eru volupta tibus. Eu
            volumus explicari sed. Mel mutat vitupata susci piantur et, et
            fabellas explicari adipiscing quo. No dol em blandit theophrastus
            eos, nam eu per secuti repu dadae, duo hinc vide aliquip et. An has
            alterum nominavi. Nam at elitr veritus voluptaria. Cu eum regione
            tacimates vituperatoribus
            <br />
            <br />
            Consul latine iudicabit eu vel. Cu has animal eru volupta tibus. Eu
            volumus explicari sed. Mel mutat vitupata susci piantur et, et
            fabellas explicari adipiscing quo. No dol em blandit theophrastus
            eos, nam eu per secuti repu dadae, duo hinc vide aliquip et. vim an
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
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <MySkills/>
    </div>
  );
};

export default About;
