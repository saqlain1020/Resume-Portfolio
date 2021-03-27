import useStyles from "./useStyles";

const MainBg = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.scrollWrapper}>{props.children}</div>
      </div>
    </div>
  );
};

export default MainBg;
