import React from "react";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import ModalManager from "src/Components/ModalManager/ModalManager";
import ImageSrc from "src/Assets/Images/1.jpg";
import MyButton from "../MyButton/MyButton";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { SRLWrapper } from "simple-react-lightbox";
import { useLightbox } from "simple-react-lightbox";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    paddingTop: "75%",
    position: "relative",
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 6px 0px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    transition: "all 300ms",
    "&:hover": {
      boxShadow: "0 15px 50px 0 rgb(0 0 0 / 14%)",
    },
  },
  hoverContainer: {
    height: "100%",
    position: "absolute",
    width: "100%",
    opacity: 0,
    top: 0,
    left: 0,
    background: "rgba(255,255,255,0.9)",
    transition: "all 300ms",
    "&:hover": {
      opacity: 1,
    },
  },
  hoverText: {
    color: theme.palette.text.primary,
    fontWeight: 700,
    letterSpacing: 2,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  projectTitle: {
    fontWeight: 600,
    fontSize: 24,
  },
  para: {
    fontSize: 14,
    fontWeight: 500,
    marginTop: 10,
  },
  visitBtn: {
    //   width:"150px",
    marginTop: 10,
  },
  fullScreenBtn: {
    position: "absolute",
    top: 280,
    right: 20,
    color: theme.palette.primary.main,
    background: "white",
    width: 40,
    height: 40,
    "&:hover": {
      background: "white",
    },
  },
}));

const PortfolioCard = ({ imgs, para, title, titleImg, link }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { openLightbox, closeLightbox } = useLightbox();

  return (
    <div
      className={classes.root}
      style={{ backgroundImage: `url(${titleImg})` }}
    >
      <div className={`flex ${classes.hoverContainer}`}>
        <Typography className={classes.hoverText} onClick={() => setOpen(true)}>
          VIEW MORE
        </Typography>
      </div>
      <ModalManager open={open} close={() => setOpen(false)}>
        <div>
          <SRLWrapper elements={imgs.map((item) => ({ src: item }))} />
          <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
            {imgs.map((ele, index) => (
              <img
                key={index}
                src={ele}
                width="100%"
                style={{ maxHeight: 400, objectFit: "contain" }}
                alt=""
              />
            ))}
          </Carousel>
          <IconButton
            className={classes.fullScreenBtn}
            onClick={() => openLightbox(0)}
          >
            <FullscreenIcon />
          </IconButton>
          {/* <img src={ImageSrc} width="100%" /> */}
          <div style={{ padding: 20 }}>
            <Typography variant="h4" className={classes.projectTitle}>
              {title}
            </Typography>
            <Typography className={classes.para}>{para}</Typography>
            {link && (
              <center>
                <a href={link} target="_blank">
                  <MyButton variant="outlined" className={classes.visitBtn}>
                    VISIT
                  </MyButton>
                </a>
              </center>
            )}
          </div>
        </div>
      </ModalManager>
    </div>
  );
};

export default PortfolioCard;
