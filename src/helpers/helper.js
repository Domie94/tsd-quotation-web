import { get, post, put,del } from "./api_helper";

// Customer Method
export const getCustomerApi = () => get('/customers');
export const getCustomerIdApi = (id) => get('/customers/' + id);
export const createCustomerApi = (data) => post('/customers', data);
export const updateCustomerApi = (id, data) => put('/customers/' + id, data);
export const deleteCustomerApi = (id) => del('/customers/' + id);

// Product Method
export const getProductApi = () => get('/products');
export const getProductIdApi = (id) => get('/products/' + id);
export const createProductApi = (data) => post('/products', data);
export const updateProductApi = (id, data) => put('/products/' + id, data);
export const deleteProductApi = (id) => del('/products/' + id);
