import React from "react";

function Main({ src, description }) {
  return (
    <div>
      <img src={src} alt={src} />
      <p>{description}</p>
    </div>
  );
}

export default Main;
