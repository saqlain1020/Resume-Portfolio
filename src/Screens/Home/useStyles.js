import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "min-content 1fr",
    },
  },
  imgWrapper: {
    height: "100%",
    width: "100%",
  },
  content: {
    alignItems: "flex-start",
    flexFlow: "column",
    padding: 20,
  },
  para: {
    marginTop: 40,
    fontWeight: 500,
    maxWidth: 600,
  },
}));
export default useStyles;
