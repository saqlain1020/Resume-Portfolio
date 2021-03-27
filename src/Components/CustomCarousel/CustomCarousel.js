import React from "react";
import { makeStyles } from "@material-ui/core";
import Dots from "material-ui-dots";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .carousel .slide": {
      textAlign: "left",
    },
  },
  dots: {
    marginTop: 10,
    "& .MuiPaper-root": {
      background: theme.palette.primary.main,
    },
  },
}));

const CustomCarousel = ({ children }) => {
  const classes = useStyles();
  const ref = React.useRef();
  const [val, setVal] = React.useState(0);
  const [totalSlides, setTotalSlides] = React.useState(0);

  React.useEffect(() => {
    setTotalSlides(ref.current.itemsRef.length);
  }, [ref]);

  const handleChange = (e) => {
    setVal(e);
  };

  const handleDotClick = (e) => {
    setVal(e);
  };
  return (
    <div className={classes.root}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        interval={4000}
        autoPlay={true}
        showArrows={false}
        onChange={handleChange}
        selectedItem={val}
        showIndicators={false}
        ref={ref}
      >
        {children}
      </Carousel>
      <center style={{ marginTop: -20 }}>
        <Dots
          className={classes.dots}
          index={val}
          count={totalSlides}
          onDotClick={handleDotClick}
        />
      </center>
    </div>
  );
};

export default CustomCarousel;
