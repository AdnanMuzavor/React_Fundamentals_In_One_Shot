import React from "react";
import { Route } from "react-router-dom";
import UseStateDemo from "./HookDemoScreens/UseStateDemo";
import UseEffectDemo from "./HookDemoScreens/UseEffectDemo";
import UseReducerDemo from "./HookDemoScreens/UseReducerDemo";
import UseLocationDemo from "./HookDemoScreens/useLocationDemo";
import UseLocationDemo2 from "./HookDemoScreens/UseLocationDemoSearch";
import Home from "./Screens/Home";
import UseHistoryDemo from "./HookDemoScreens/UseHistoryDemo";

const RouterForScreen = () => {
  return (
    <>
      <Route path="/useStateHook" render={() => <UseStateDemo />}></Route>
      <Route path="/useEffectHook" render={() => <UseEffectDemo />}></Route>
      <Route path="/useReducerHook" render={() => <UseReducerDemo />}></Route>
      <Route  path="/useHistoryHook" render={() => <UseHistoryDemo />}></Route>
      <Route exact path="/useLocationHook:id" render={() => <UseLocationDemo />}></Route>
      <Route exact path="/useLocationHook2/userprofile" render={() => <UseLocationDemo2 />}></Route>
      <Route exact path="/" render={() => <Home />}></Route>
     
    </>
  );
};

export default RouterForScreen;
