//User state which will be available to all the components

import UserContext from "./userContext";

const UserState = (props) => {
  const state = {
    name: "Harry",
    email: "hr@gmail.com",
  };
  return (
    <>
      <UserContext.Provider value={state}>
        {/* All the components which we will be wrapping in user state will be made available with the state passed to value */}
        {props.children}
      </UserContext.Provider>
    </>
  );
};

export default UserState;
