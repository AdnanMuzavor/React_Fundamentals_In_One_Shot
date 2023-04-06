//User state which will be available to all the components

import { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
  const state = {
    name: "",
    email: "",
    login:false
  };
  //Now we have to ake the state updatable hence we can pass the Updator part of UseState in the UserContext API
  const [userdata, setUserData] = useState(state);

  return (
    <>
      <UserContext.Provider value={{ userdata, setUserData }}>
        {/* All the components which we will be wrapping in user state will be made available with the state passed to value */}
        {props.children}
      </UserContext.Provider>
    </>
  );
};

export default UserState;
