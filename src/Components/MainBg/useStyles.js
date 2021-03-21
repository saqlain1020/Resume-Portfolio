import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    background: theme.palette.primary.main,
    overflow:"hidden",
    position: "relative",
    "&:before": {
      content: "''",
      position: "absolute",
      top: -260,
      left: 0,
      minHeight: "100vh",
      minHeight: "-webkit-fill-available",
      background: "white",
      transform: "rotate(45deg)",
      width: 600,
      zIndex: 0,
      [theme.breakpoints.down('xs')]:{
        display:"none",
      }
    },
  },
  container: {
    width: "calc(100% - 130px)",
    height: "calc(100% - 130px)",
    top: 65,
    left: 65,
    background: "white",
    boxShadow: "0px 0px 60px rgb(0,0,0,0.18)",
    zIndex: 55,
    position: "fixed",

    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 80px)",
      height: "calc(100% - 80px)",
      top: 40,
      left: 40,
    },
    [theme.breakpoints.down("xs")]: {
      width: "calc(100% - 10px)",
      height: "calc(100% - 10px)",
      top: 5,
      left: 5,
    },
  },
  
}));

export default useStyles;
