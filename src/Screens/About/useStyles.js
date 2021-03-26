import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 70,
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  aboutText: {
    padding: 15,
    marginRight: 10,
    // borderBottom:"1px solid grey",
    "& b": {
      letterSpacing: 2,
      color: "#222",
    },
  },
  nameContainers: {
    marginTop: 20,
  },
  aboutPara: {
    fontWeight: 500,
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  servicesGrid: {},
}));
export default useStyles;
