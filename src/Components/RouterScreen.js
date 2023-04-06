import React from "react";
import { Route } from "react-router-dom";
import UseStateDemo from "./HookDemoScreens/UseStateDemo";
import UseEffectDemo from "./HookDemoScreens/UseEffectDemo";
const RouterForScreen = () => {
  return (
    <>
      <Route path="/useStateHook" render={() => <UseStateDemo />}></Route>
      <Route path="/useEffectHook" render={() => <UseEffectDemo />}></Route>
    </>
  );
};

export default RouterForScreen;
