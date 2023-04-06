import React, { useEffect, useState } from "react";
const UseEffectDemo = () => {
  const [count, setcount] = useState(0);

  //This useeffect will be called as soon a spage reloads/loads
  useEffect(() => {
    setcount(8);
  }, []);

  //This useeffect will be called as  soon as the state on [ changes ]
  useEffect(() => {
   console.log("The count has been changed")
  }, [count]);
  return (
    <>
      <div className="conatiner">
        <h1>Value of count is: {count}</h1>
        <button className="btn-primary" onClick={() => setcount(count + 1)}>
          Increment
        </button>
        <button className="btn-primary" onClick={() => setcount(count - 1)}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default UseEffectDemo;
