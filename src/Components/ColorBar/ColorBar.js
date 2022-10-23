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
  { color: "#F44336", lightColor: "ede1e14a" },
  { color: "#FF4081", lightColor: "#ede1e84a" },
  { color: "#FF5722", lightColor: "#ede6e14a" },
  { color: "#009688", lightColor: "#e1ede94a" },
  { color: "#4CAF50", lightColor: "#e3ede14a" },
  { color: "#00BCD4", lightColor: "#e1eded4a" },
  { color: "#2196F3", lightColor: "#e1e7ed4a" },
  { color: "#9C27B0", lightColor: "#ebe1ed4a" },
  { color: "#3F51B5", lightColor: "#e1e7ed4a" },
];

const lightColors = [
  "#ede1e14a",
  "#ede1e84a",
  "#ede6e14a",
  "#e1ede94a",
  "#e3ede14a",
  "#e1eded4a",
  "#e1e7ed4a",
  "#ebe1ed4a",
  "#e1e7ed4a",
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
    <motion.div variants={container} initial="hidden" animate="visible" className={classes.root}>
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
          style={{ background: item.color }}
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
