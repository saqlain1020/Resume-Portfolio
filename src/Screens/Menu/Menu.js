import React from "react";
import { makeStyles } from "@material-ui/core";
import MenuCard from "src/Components/MenuCard/MenuCard";
import { motion } from "framer-motion";
import HouseSvg from "src/Assets/Icons/house.svg";
import CvSvg from "src/Assets/Icons/approved.svg";
import ManSvg from "src/Assets/Icons/man.svg";
import PortfolioSvg from "src/Assets/Icons/portfolio.svg";
import ContactSvg from "src/Assets/Icons/identification.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    maxWidth: 1100,
    marginLeft: "auto",
    marginRight: "auto",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const menuArray = [
  {
    title: "HOME",
    icon: HouseSvg,
  },
  {
    title: "ABOUT",
    icon: ManSvg,
  },
  {
    title: "RESUME",
    icon: CvSvg,
  },
  {
    title: "PORTFOLIO",
    icon: PortfolioSvg,
  },
  {
    title: "CONTACT",
    icon: ContactSvg,
  },
];
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const items = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className={classes.grid}
      >
        {menuArray.map((item, index) => (
          <motion.div key={index} variants={items}>
            <Link to={item.title.toLowerCase()}>
              <MenuCard title={item.title} icon={item.icon} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Menu;
