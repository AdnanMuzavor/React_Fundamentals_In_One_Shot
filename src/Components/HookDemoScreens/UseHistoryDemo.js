import React from "react";
import { useHistory } from "react-router-dom";

const UseHistoryDemo = () => {
  const history = useHistory();
  return (
    <>
      <h1>Hello, Ill hsow you useHistory Hook demo</h1>
      <button
        className="btn btn-primary mt-3 my-3"
        onClick={() => {
          history.goBack();
        }}
      >
        Click Me and I'll take you to previous screen
      </button>
      <br />
      <button
        className="btn btn-primary mt-3 my-3"
        onClick={() => {
          history.push("/");
        }}
      >
        Click Me and I'll take you to Home
      </button>
    </>
  );
};

export default UseHistoryDemo;
