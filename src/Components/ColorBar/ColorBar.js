import React from "react";
import { connect } from "react-redux";
import useStyles from "./useStyles";
import { setTheme } from "src/Redux/theme/themeActions";
import { IconButton } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { closeMenu, openMenu } from "src/Redux/menu/menuReducer";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const ColorBar = ({ setTheme, menu, openMenu, closeMenu }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.colorMenu}>
        <IconButton>
          {menu ? (
            <CloseRoundedIcon onClick={closeMenu} />
          ) : (
            <MenuRoundedIcon onClick={openMenu} />
          )}
        </IconButton>
      </div>
      <div
        className={classes.color}
        style={{ background: "#F44336" }}
        onClick={() => setTheme("#F44336")}
      />
      <div
        className={classes.color}
        style={{ background: "#FF4081" }}
        onClick={() => setTheme("#FF4081")}
      />
      <div
        className={classes.color}
        style={{ background: "#FF5722" }}
        onClick={() => setTheme("#FF5722")}
      />
      <div
        className={classes.color}
        style={{ background: "#009688" }}
        onClick={() => setTheme("#009688")}
      />
      <div
        className={classes.color}
        style={{ background: "#4CAF50" }}
        onClick={() => setTheme("#4CAF50")}
      />
      <div
        className={classes.color}
        style={{ background: "#00BCD4" }}
        onClick={() => setTheme("#00BCD4")}
      />
      <div
        className={classes.color}
        style={{ background: "#2196F3" }}
        onClick={() => setTheme("#2196F3")}
      />
      <div
        className={classes.color}
        style={{ background: "#9C27B0" }}
        onClick={() => setTheme("#9C27B0")}
      />
      <div
        className={classes.color}
        style={{ background: "#3F51B5" }}
        onClick={() => setTheme("#3F51B5")}
      />
    </div>
  );
};

const mapState = (state) => ({
  menu: state.menu,
});

const actions = {
  setTheme,
  openMenu,
  closeMenu,
};

export default connect(mapState, actions)(ColorBar);
