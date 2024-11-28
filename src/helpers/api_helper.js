import axios from "axios";

//apply base url for axios
const API_URL = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_LOCAL : process.env.REACT_APP_API_URL_RPOD;
 
// function handleExpiredToken() {
//     SET_DATA_NULL();
//     window.location.href = "/login";
// }

// function handleError() {
//     window.location.href = "/server";
// }

export async function get(url) {
    return await axios
        .get(API_URL + url, {
            headers: {
                // 'Authorization': GET_TOKEN(),
                // 'Acc-User-Id': GET_USER_ID(),
                // 'Acc-Village-Code-Center': GET_VILLAGE(),
                // 'Acc-District-Code-Center': GET_DISTRICT(),
                // 'Acc-Province-Code-Center': GET_PROVINCE(),
                'Content-Type': 'application/json',
                // 'x-api-key': '5310d335-2c84-49b2-87d7-5216820e7d3b'
            }
        })
        .then((response) => response.data)
        .catch((error) => {
            // if (error.message === "Network Error") {
            //     handleError();
            // } else if (error.response.status === 401) {
            //     handleExpiredToken();
            // }
            return Promise.reject(error)
        })
}

// export async function postSignIn(url, data) {
//     return axios
//         .post(API_URL + url, { ...data }, {
//             headers: {
//                 'Authorization': GET_TOKEN(),
//                 'Acc-User-Id': GET_USER_ID(),
//                 'Acc-Village-Code-Center': GET_VILLAGE(),
//                 'Acc-District-Code-Center': GET_DISTRICT(),
//                 'Acc-Province-Code-Center': GET_PROVINCE(),
//                 'Content-Type': 'application/json',
//                 'x-api-key': '5310d335-2c84-49b2-87d7-5216820e7d3b'
//             }
//         })
//         .then((response) => response.data)
//         .catch((error) => {
//             if (error.message === "Network Error") {
//                 handleError();
//             }
//             return Promise.reject(error)
//         })
// }

export async function post(url, data) {
    return axios
        .post(API_URL + url, { ...data }, {
            headers: {
                // 'Authorization': GET_TOKEN(),
                // 'Acc-User-Id': GET_USER_ID(),
                // 'Acc-Village-Code-Center': GET_VILLAGE(),
                // 'Acc-District-Code-Center': GET_DISTRICT(),
                // 'Acc-Province-Code-Center': GET_PROVINCE(),
                'Content-Type': 'application/json',
                // 'x-api-key': '5310d335-2c84-49b2-87d7-5216820e7d3b'
            }
        })
        .then((response) => response.data)
        .catch((error) => {
            // if (error.message === "Network Error") {
            //     handleError();
            // } else if (error.response.status === 401) {
            //     handleExpiredToken();
            // }
            return Promise.reject(error)
        })
}

export async function put(url, data) {
    return axios
        .put(API_URL + url, { ...data }, {
            headers: {
                // 'Authorization': GET_TOKEN(),
                // 'Acc-User-Id': GET_USER_ID(),
                // 'Acc-Village-Code-Center': GET_VILLAGE(),
                // 'Acc-District-Code-Center': GET_DISTRICT(),
                // 'Acc-Province-Code-Center': GET_PROVINCE(),
                'Content-Type': 'application/json',
                // 'x-api-key': '5310d335-2c84-49b2-87d7-5216820e7d3b'
            }
        })
        .then((response) => response.data)
        .catch((error) => {
            // if (error.message === "Network Error") {
            //     handleError();
            // } else if (error.response.status === 401) {
            //     handleExpiredToken();
            // }
            return Promise.reject(error)
        })
}

export async function del(url) {
    return await axios
        .delete(API_URL + url, {
            headers: {
                // 'Authorization': GET_TOKEN(),
                // 'Acc-User-Id': GET_USER_ID(),
                // 'Acc-Village-Code-Center': GET_VILLAGE(),
                // 'Acc-District-Code-Center': GET_DISTRICT(),
                // 'Acc-Province-Code-Center': GET_PROVINCE(),
                'Content-Type': 'application/json',
                // 'x-api-key': '5310d335-2c84-49b2-87d7-5216820e7d3b'
            }
        })
        .then((response) => response.data)
        .catch((error) => {
            // if (error.message === "Network Error") {
            //     handleError();
            // } else if (error.response.status === 401) {
            //     handleExpiredToken();
            // }
            return Promise.reject(error)
        })
}

// export async function patch(url, data) {
//     return axios
//         .patch(API_URL + url, { ...data }, {
//             headers: {
//                 'Authorization': GET_TOKEN(),
//                 'Acc-User-Id': GET_USER_ID(),
//                 'Acc-Village-Code-Center': GET_VILLAGE(),
//                 'Acc-District-Code-Center': GET_DISTRICT(),
//                 'Acc-Province-Code-Center': GET_PROVINCE(),
//                 'Content-Type': 'application/json',
//                 'x-api-key': '5310d335-2c84-49b2-87d7-5216820e7d3b'
//             }
//         })
//         .then((response) => response.data)
//         .catch((error) => {
//             if (error.message === "Network Error") {
//                 handleError();
//             } else if (error.response.status === 401) {
//                 handleExpiredToken();
//             }
//             return Promise.reject(error)
//         })
// }