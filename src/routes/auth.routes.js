import React from "react";
import { Navigate } from "react-router-dom";

// Dashboard  
import Dashboard from "../Pages/Dashboard";
import MainCompany from "../Pages/Company/Main";
import MainCustomers from "../Pages/Customers/Main";
import AddCustomers from "../Pages/Customers/Add";
import EditCustomers from "../Pages/Customers/Edit";
import MainProducts from "../Pages/Products/Main";
import AddProducts from "../Pages/Products/Add";
import EditProducts from "../Pages/Products/Edit";
import MainQuotations from "../Pages/Quotations/Main";
import SelectCustomerQuotations from "../Pages/Quotations/SelectCustomer";
import SelectProductQuotations from "../Pages/Quotations/SelectProduct";
import SelectProductAddQuotations from "../Pages/Quotations/SelectProductAdd";
import MainQuotationLists from "../Pages/QuotationLists/Main";

import ReportQuotation from "../Pages/Report/Quotation";
 

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/company", component: <MainCompany /> },
  { path: "/customers", component: <MainCustomers /> },
  { path: "/customers/add", component: <AddCustomers /> },
  { path: "/customers/edit/:id", component: <EditCustomers /> },
  { path: "/products", component: <MainProducts /> },
  { path: "/products/add", component: <AddProducts /> },
  { path: "/products/edit/:id", component: <EditProducts /> },
  { path: "/quotations", component: <MainQuotations /> },
  { path: "/quotations/select/customer", component: <SelectCustomerQuotations /> },
  { path: "/quotations/select/product", component: <SelectProductQuotations /> },
  { path: "/quotations/select/product/add/:id", component: <SelectProductAddQuotations /> },
  { path: "/quotation/lists", component: <MainQuotationLists /> },

  
  { path: "/quotation/report/:id", component: <ReportQuotation /> },

  { path: "/", exact: true, component: <Navigate to="/dashboard" />, },
];

export { authProtectedRoutes };