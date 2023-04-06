import React, { useState } from "react";

const UseStateDemo = () => {
  //state
  const [text, settext] = useState("Enter text here");
  //function
  const ConvertToUpperCase = (e) => {
    e.preventDefault();
    settext(text.toUpperCase());
  };
  return (
    <>
      <div className="container">
        <form action="#" className="formwrap">
          <label htmlFor="textCaseChanger">Enter your text here</label>
          <br />
          <textarea
            name="txtarea"
            id="textCaseChanger"
            cols="30"
            rows="10"
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
          <br />
          <button className="btn btn-primary" onClick={ConvertToUpperCase}>
            To Upper Case
          </button>
        </form>
      </div>
    </>
  );
};

export default UseStateDemo;
