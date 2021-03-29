import React from "react";

const Quote = (props) => {
  return (
    <div style={{...props.style,padding:12,}} {...props} >
    <svg viewBox="0 0 512 512">
      
        <path
          style={{fill:"inherit"}}
          d="M432,416V160H176v-16c0-26.464,21.536-48,48-48h48V0h-48C144.608,0,80,64.608,80,144v16H16v96h64
		          v160H16v96h224v-96h-64V256h160.896v160H272v96h224v-96H432z"
        />
        <circle style={{fill:"inherit"}} cx="384" cy="48" r="48" />
      
    </svg>
    </div>
  );
};
export default Quote;
