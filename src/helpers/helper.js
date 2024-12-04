import { get, post, put,del, postSignIn } from "./api_helper";

const companyId = localStorage.getItem('company_id');

// Login Method
export const loginApi = (data) => postSignIn('/users/login', data);

// Quotation Method
export const createQuotationApi = (data) => post(`/quotations`, data);
export const getQuotationApi = (page) => get(`/quotations?page=${page}&company_id=${companyId}`);
export const getQuotationIdApi = (id) => get(`/quotations/${id}?company_id=${companyId}`);

// Customer Method
export const getCustomerApi = (page) => get(`/customers?page=${page}&company_id=${companyId}`);
export const getCustomerIdApi = (id) => get(`/customers/${id}?company_id=${companyId}`);
export const createCustomerApi = (data) => post(`/customers`, data);
export const updateCustomerApi = (id, data) => put(`/customers/${id}`, data);
export const deleteCustomerApi = (id) => del(`/customers/${id}?company_id=${companyId}`); 

// Product Method
export const getProductApi = (page) => get(`/products?page=${page}&company_id=${companyId}`);
export const getProductIdApi = (id) => get(`/products/${id}?company_id=${companyId}`);
export const createProductApi = (data) => post(`/products`, data);
export const updateProductApi = (id, data) => put(`/products/${id}`, data);
export const deleteProductApi = (id) => del(`/products/${id}?company_id=${companyId}`);

// Company Method
export const getCompanyApi = (page) => get(`/companies?page=${page}&company_id=${companyId}`);
export const getCompanyIdApi = (id) => get(`/companies/${id}`);
export const createCompanyApi = (data) => post(`/companies`, data);
export const updateCompanyApi = (id, data) => put(`/companies/${id}`, data);
export const deleteCompanyApi = (id) => del(`/companies/${id}?company_id=${companyId}`);

