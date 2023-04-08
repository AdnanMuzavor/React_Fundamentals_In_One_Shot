import { useLocation, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
const UseLocationDemo = (props) => {
  const location = useLocation();
  const params=useParams();
  
  const [path, setpath] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    //Location will give you entire pathname or search, but anything qritten after : is params can be get through the props.match.params
    setpath(location.pathname.split(":")[0].replace("/", ""));

    // setId(location.pathname.split(":")[1]);

    console.log(props)
    console.log(props.match.params)
  
    //WAY 01: using props
    setId(props.match.params.id)
    
    //WAY 02: using useParams
    const {id}=params;
    console.log("id is: ",id)

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
