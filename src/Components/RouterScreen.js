import React from "react";
import { Route } from "react-router-dom";
import UseStateDemo from "./HookDemoScreens/UseStateDemo";
import UseEffectDemo from "./HookDemoScreens/UseEffectDemo";
import UseReducerDemo from "./HookDemoScreens/UseReducerDemo";
import UseLocationDemo from "./HookDemoScreens/useLocationDemo";
import UseLocationDemo2 from "./HookDemoScreens/UseLocationDemoSearch";

const RouterForScreen = () => {
  return (
    <>
      <Route path="/useStateHook" render={() => <UseStateDemo />}></Route>
      <Route path="/useEffectHook" render={() => <UseEffectDemo />}></Route>
      <Route path="/useReducerHook" render={() => <UseReducerDemo />}></Route>
      <Route exact path="/useLocationHook:id" render={() => <UseLocationDemo />}></Route>
      <Route exact path="/useLocationHook2/userprofile" render={() => <UseLocationDemo2 />}></Route>
    </>
  );
};

export default RouterForScreen;
