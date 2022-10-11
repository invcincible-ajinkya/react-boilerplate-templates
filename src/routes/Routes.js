import React, { Suspense } from "react";
import { Routes as Switch, Route } from "react-router-dom";

const DynamicTest = React.lazy(() => import("../components/Test"));

const DynamicRoutes = (
  <Suspense fallback="Loading...">
    <Switch>
      <Route path="/" element={<DynamicTest text="Send Props here" />}></Route>
      <Route
        path="/test"
        element={<DynamicTest text="Send Props here" />}
      ></Route>
    </Switch>
  </Suspense>
);

export default DynamicRoutes;
