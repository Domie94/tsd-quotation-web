import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import { publicRoutes } from "./routes/public.routes";
import { authProtectedRoutes } from "./routes/auth.routes";

// Import all middleware
import Authmiddleware from "./routes/route.routes";

import AuthLayout from "./layouts/AuthLayouts/index";
import NonAuthLayout from "./layouts/NoneAuthLayouts/index";

function App() {
  return (
    <>
      <React.Fragment>
        <Routes>
          {publicRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <NonAuthLayout>
                  {route.component}
                </NonAuthLayout>
              }
              key={idx}
              exact={true}
            />
          ))}

          {authProtectedRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <Authmiddleware>
                  <AuthLayout>{route.component}</AuthLayout>
                </Authmiddleware>}
              key={idx}
              exact={true}
            />
          ))}

        </Routes>
      </React.Fragment>
    </>
  );
}

export default App;
