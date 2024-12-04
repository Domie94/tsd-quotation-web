import React from "react";
import { Navigate } from "react-router-dom";

// page
import Login from "../Pages/Login";
import Pages404 from "../Pages/Page404";
import Page500 from "../Pages/Page500";

const publicRoutes = [
    { path: "/login", component: <Login /> },
    { path: "/pages-404", component: <Pages404 /> },
    { path: "/server", component: <Page500 /> },

    // page not found
    { path: "*", component: <Navigate to="/pages-404" />, }
];

export { publicRoutes };