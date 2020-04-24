import React from "react";

const IconSocial = ({ action = "!#", src, alt }) => (
  <a className="icon-social" href={action} target="_blank" rel="noopener noreferrer">
    <img src={src} alt={alt} />
  </a>
);
export default IconSocial;
