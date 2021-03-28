import React from "react";
import { Dialog, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: 20,
    overflow: "auto",
  },
  closeIcon: {
    position: "absolute",
    right: 0,
    top: 0,
    transform: "translate(17px,-17px)",
    background: "white",
    color: theme.palette.text.primary,
    borderRadius: 360,
    overflow: "hidden",
    padding: 15,
    width: 50,
    height: 50,
    zIndex: 100,
    boxShadow: "3px -3px 10px rgba(0,0,0,0.1)",
    transition: "all 200ms",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "3px -3px 10px rgba(0,0,0,0.2)",
    },
  },
}));

const ModalManager = ({ open, close, ...props }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={close}
      maxWidth={"xs"}
      BackdropProps={{
        style: {
          backgroundColor: "rgba(255,255,255,0.8)",
        },
      }}
      disableBackdropClick
      PaperProps={{
        style: {
          overflow: "visible",
          borderRadius: 0,
        },
      }}
    >
      <CloseIcon
        className={classes.closeIcon}
        onClick={close}
      />

      <div className={classes.root}>{props.children}</div>
    </Dialog>
  );
};

export default ModalManager;

ModalManager.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};
