import useStyles from "./useStyles";

const MainBg = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>{props.children}</div>
    </div>
  );
};

export default MainBg;
