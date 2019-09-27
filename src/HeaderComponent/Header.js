import React from "react";

function Header({ title, date }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
    </div>
  );
}

export default Header;
