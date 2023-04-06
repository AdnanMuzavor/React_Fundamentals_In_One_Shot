import { useReducer } from "react";

//Define initial state
const initialState = {
  count: 0,
  Operation: "Nill",
};

//Define the reducer
const reducer = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, Operation: action.type };

    case "DECREMENT":
      return { count: state.count - 1, Operation: action.type };

    default:
      break;
  }
};

const UseReducerDemo = () => {
  //reducer is  pure function whcih talkes state and action as input and based on action i.e requested it updates the state
  const [state, dispatch] = useReducer(reducer, initialState);

  //it returns the updated state and dispatch function whcih is used to dispatch an action

  return (
    <>
      <div className="container">
        <h2>{state.count}</h2>
        <button
          className="btn-primary mx-2 my-2"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          className="btn-primary mx-2 my-2"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default UseReducerDemo;
