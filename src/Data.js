import ReactIco from "./Assets/Icons/ReactIco";

import MuiIco from "./Assets/Icons/MuiIco";
import FirebaseIco from "./Assets/Icons/FirebaseIco";

export const services = [
  {
    Icon: ReactIco,
    heading: "REACT JS",
    description: `ReactJS allows us to build dynamic and interactive web apps with ease. It’s fast, scalable, flexible, powerful, 
     and has a robust developer community that’s rapidly growing.`,
  },
  {
    Icon: MuiIco,
    heading: "MATERIAL UI",
    description: `Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications.`,
  },
  {
    Icon: FirebaseIco,
    heading: "FIREBASE",
    description: `Firebase provides serverless architecture with many services including authentication, storage, database, cloud functions etc.`,
  },
];

export const skills = [
  {
    title: "HTML/CSS",
    value: 90,
  },

  {
    title: "REACT JS",
    value: 90,
  },

  {
    title: "MATERIAL UI",
    value: 95,
  },
  {
    title: "ADVANCE JS",
    value: 85,
  },
  {
    title: "FIREBASE",
    value: 90,
  },
  {
    title: "3rd PARTY APIs",
    value: 75,
  },
];

export const education = [
  {
    title: "University of Karachi",
    subTitle: "BS:SE - 2019 to current",
    para: "Bachelors in Software Engineering from UBIT Karachi University.",
  },
  {
    title: "Adamjee Govt Sci College",
    subTitle: "Intermediate - 2016 to 2018",
    para: "Intermediate passed with A grade, from the top college.",
  },
  {
    title: "School",
    subTitle: "Matric - 2014 to 2016",
    para:
      "Matric SSC passed with A+ grade, with various congratulating certificates.",
  },
];

export const experience = [
  {
    title: "Frontend Dev at Slectus(US)",
    subTitle: "2020 to current",
    para:
      "Working at a US based startup name Slectus. As remote dev for react frontend development.",
  },
  {
    title: "Frontend Dev at Novasoft",
    subTitle: "2020 to 2020",
    para:
      "Working as a frontend react developer at a software house named Novasoft.",
  },
  {
    title: "Freelancing",
    subTitle: "2019 to current",
    para:
      "Worked on various projects web based and windows in JAVA C# C++ Python...",
  },
  {
    title: "Graphics Designing at AlRaheem Printing",
    subTitle: "2018",
    para: "1 Year graphics designing at Al-Raheem Printing Services.",
  },
];

export const testimonials = [
  {
    title: "abdul_rafay_ (PK)",
    subTitle: "5 Star at Fiverr",
    para: `Saqlain is an expert react developer, experienced in building beautiful UI, 
    fast delivery and clean code, I am extremely satisfied with the work and I highly 
    recommend him. Will definitely work with him again.`,
  },
  {
    title: "jesusalc (GR)",
    subTitle: "5 Star at Fiverr",
    para: `Good communication, if he does not know, he will figure out and participate together. 
    Good asking questions. Good idea for design.`,
  },
  {
    title: "style2u (CR)",
    subTitle: "5 Star at Fiverr",
    para: `I am highly recommend on Saqlan as a profession to work with I know I will use his service again`,
  },
  {
    title: "perecodina (US)",
    subTitle: "5 Star Review on Fiverr",
    para: "Great experience. Really recommend working with this Seller.",
  },
];

export const portfolio = [
  {
    titleImg: require("src/Assets/Images/Projects/Kelekshen/1.png").default,
    title: "Kelekshen",
    para: `A blockchain trading system, frontend developed on React JS, 
    with material ui core components and alot of custom desinged components 
    and modals. With a beautiful theme this website highlights my potential as a frontend dev.`,
    link: "https://kelekshen.netlify.app/",
    imgs: [
      require("src/Assets/Images/Projects/Kelekshen/1.png").default,
      require("src/Assets/Images/Projects/Kelekshen/2.png").default,
      require("src/Assets/Images/Projects/Kelekshen/3.png").default,
      require("src/Assets/Images/Projects/Kelekshen/4.png").default,
      require("src/Assets/Images/Projects/Kelekshen/5.png").default,
    ],
  },
  {
    titleImg: require("src/Assets/Images/Projects/Shopian/1.png").default,
    title: "Shopian",
    para: `This is a fullstack application currently in development and one of the first sites which 
    i created using both React JS Material UI and Firebase backend.
    This app combines a materialistic ui with powerful backend provided by google firebase.`,
    link: "https://shopian-app.web.app/",
    imgs: [
      require("src/Assets/Images/Projects/Shopian/1.png").default,
      require("src/Assets/Images/Projects/Shopian/2.png").default,
      require("src/Assets/Images/Projects/Shopian/3.png").default,
      require("src/Assets/Images/Projects/Shopian/4.png").default,
      require("src/Assets/Images/Projects/Shopian/5.png").default,
    ],
  },
  {
    titleImg: require("src/Assets/Images/Projects/WalletTracker/1.png").default,
    title: "Wallet Tracker",
    para: `This is a fullstack app created with google firebase backend and pure HTML/CSS and Javascript.
    It's a wallet tracking app which you can signin in to keep track of your expenses and income very easily with a simple very easy to understand UI`,
    link: "https://wallet-tracker-js-ce5d2.web.app/",
    imgs: [
      require("src/Assets/Images/Projects/WalletTracker/1.png").default,
      require("src/Assets/Images/Projects/WalletTracker/2.png").default,
      require("src/Assets/Images/Projects/WalletTracker/3.png").default,
    ],
  },
  {
    titleImg: require("src/Assets/Images/Projects/SaqlainPrinters/1.png")
      .default,
    title: "Saqlain Printers",
    para: `Website made with pure html/css and pure javascript animations.`,
    link: "https://saqlainprinters.web.app/",
    imgs: [
      require("src/Assets/Images/Projects/SaqlainPrinters/1.png").default,
      require("src/Assets/Images/Projects/SaqlainPrinters/2.png").default,
      require("src/Assets/Images/Projects/SaqlainPrinters/3.png").default,
      require("src/Assets/Images/Projects/SaqlainPrinters/4.png").default,
    ],
  },
  {
    titleImg: require("src/Assets/Images/Projects/commingsoon.png").default,
    title: "",
    para: ``,
    // link: "https://google.com",
    imgs: [
      require("src/Assets/Images/Projects/commingsoon.png").default,
      require("src/Assets/Images/Projects/commingsoon.png").default,
      require("src/Assets/Images/Projects/commingsoon.png").default,
    ],
  },
];
