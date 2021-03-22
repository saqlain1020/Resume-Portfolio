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
    overflowY:"auto",
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
    "&::-webkit-scrollbar":{
      width:5,
      height:5,
      paddingRight:2,
      marginRight:2,
      transform: "translateX(-10px)"
    },
    "&::-webkit-scrollbar-track":{
      marginRight: 2,
      paddingRight:2,
      transform: "translateX(-10px)"
    },
    "&::-webkit-scrollbar-thumb":{
      background: "rgba(0,0,0,0.3)",
      
      borderRadius: 360,
      marginRight: 2,
      "&:hover":{
        background: theme.palette.primary.main,
      }
    },
  },
  
}));

export default useStyles;
