import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    height: "100%",
    width: "auto",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    zIndex:100,
  },
  color: {
    width: 5,
    height: 50,
    marginTop: 1,
    cursor: "pointer",
    marginBottom: 1,
    transition: "all 300ms ease-out",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
    background: theme.palette.primary.main,
    "&:hover": {
      width: 30,
    },
  },
  colorMenu: {
    width: "auto",
    height: 50,
    marginTop: 1,
    cursor: "pointer",
    marginBottom: 1,
    transition: "all 300ms ease-out",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
    background: theme.palette.primary.main,
    color: "white",
  },
}));

export default useStyles;
