import React from "react";

const Header = ({ title, description }) => {
  return (
    <>
      <div className="container bg-red">
        <h1>{title}</h1>
        <p className="text-center d-flex">{description}</p>
      </div>
    </>
  );
};

export default Header;
