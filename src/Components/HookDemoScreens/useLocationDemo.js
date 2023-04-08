import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
const UseLocationDemo = () => {
  const location = useLocation();
  const [path, setpath] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    setpath(location.pathname.split(":")[0].replace("/", ""));
    setId(location.pathname.split(":")[1]);
  }, []);
  console.log(location);
  return (
    <>
      <h1>Path is {path} </h1>
      <h2>Id is {id}</h2>
    </>
  );
};

export default UseLocationDemo;
