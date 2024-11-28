import React from "react";
import { Navigate } from "react-router-dom";

// Dashboard  
import Dashboard from "../Pages/Dashboard";
import MainCompany from "../Pages/Company/Main";
import MainCustomers from "../Pages/Customers/Main";
import AddCustomers from "../Pages/Customers/Add";
import EditCustomers from "../Pages/Customers/Edit";
import MainProducts from "../Pages/Products/Main";
import MainQuotations from "../Pages/Quotations/Main";
import MainQuotationLists from "../Pages/QuotationLists/Main";

import ReportQuotition from "../Pages/Report/Quotition";
 

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/company", component: <MainCompany /> },
  { path: "/customers", component: <MainCustomers /> },
  { path: "/customers/add", component: <AddCustomers /> },
  { path: "/customers/edit/:id", component: <EditCustomers /> },
  { path: "/products", component: <MainProducts /> },
  { path: "/quotations", component: <MainQuotations /> },
  { path: "/quotation/lists", component: <MainQuotationLists /> },

  
  { path: "/quotation/report", component: <ReportQuotition /> },

  { path: "/", exact: true, component: <Navigate to="/dashboard" />, },
];

export { authProtectedRoutes };