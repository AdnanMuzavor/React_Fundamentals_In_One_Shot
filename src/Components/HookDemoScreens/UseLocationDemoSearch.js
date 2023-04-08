import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../CommonComponents/Header";
const UseLocationDemo2 = (props) => {
  const location = useLocation();

  console.log(location);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qty, setqty] = useState(0);
  useEffect(() => {
    if (location.search.split("&").length > 2) {
      setName(location.search.slice(1, 100).split("&")[0].split("=")[1]);
      setEmail(location.search.slice(1, 100).split("&")[1].split("=")[1]);
      setqty(location.search.slice(1, 100).split("&")[2].split("=")[1]);
    }
  }, []);
  return (
    <>
         <Header
       title="useLocation Hook"
       description=""
     />
      <h2>path is: {location.pathname}</h2>
      <h1>Hello {name}</h1>
      <h2>Your email is: {email}</h2>
      <h3>You have ordered: {qty}</h3>
    </>
  );
};

export default UseLocationDemo2;
