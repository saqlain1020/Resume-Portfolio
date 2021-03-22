import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageFade = ({ sourceArray = [], ...restProps }) => {
  const [src, setSrc] = React.useState(sourceArray[0] ? sourceArray[0] : "");

  React.useEffect(() => {
    let i = 0;
    let interval = setInterval(() => {
      setSrc(sourceArray[i]);
      i++;
      if (i === sourceArray.length) i = 0;
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [sourceArray]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ rotate: 180, scale: 0, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 180, scale: 0, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={{width:"100%",height:"100%"}}
        className="flex"
      >
        <img src={src} alt="" style={{objectFit:"contain",width:"70%",maxWidth:"400px",}}/>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageFade;
