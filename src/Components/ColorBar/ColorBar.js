import React from "react";
import { connect } from "react-redux";
import useStyles from "./useStyles";
import { setTheme } from "src/Redux/theme/themeActions";
import { IconButton } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { motion } from "framer-motion";
import { withRouter } from "react-router";

const items = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const colors = [
  "#F44336",
  "#FF4081",
  "#FF5722",
  "#009688",
  "#4CAF50",
  "#00BCD4",
  "#2196F3",
  "#9C27B0",
  "#3F51B5",
];
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const ColorBar = ({ setTheme, ...restProps }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!restProps.location.pathname.includes("menu")) setOpen(false);
  }, [restProps.location]);

  const handleOpen = () => {
    setOpen(true);
    restProps.history.push("/menu");
  };

  const handleClose = () => {
    setOpen(false);
    restProps.history.push("/");
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={classes.root}
    >
      <motion.div className={classes.colorMenu}>
        <motion.div
          whileTap={{
            scale: 0.8,
            rotate: -90,
          }}
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {!open ? (
            <IconButton onClick={handleOpen} color="inherit">
              <MenuRoundedIcon color="inherit" />
            </IconButton>
          ) : (
            <IconButton onClick={handleClose} color="inherit">
              <CloseRoundedIcon />
            </IconButton>
          )}
        </motion.div>
      </motion.div>
      {colors.map((item, index) => (
        <motion.div
          variants={items}
          key={index}
          className={classes.color}
          style={{ background: item }}
          onClick={() => setTheme(item)}
        />
      ))}
    </motion.div>
  );
};

const actions = {
  setTheme,
};

export default connect(null, actions)(withRouter(ColorBar));
