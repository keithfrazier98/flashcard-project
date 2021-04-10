import React, { Switch, Route } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Screens/Home";

function Layout() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/">
            <Home/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default Layout;
