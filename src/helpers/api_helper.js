import axios from "axios";

// development
// deployment

const API_URL = process.env.NODE_ENV === 'deployment' ? process.env.REACT_APP_API_URL_LOCAL : process.env.REACT_APP_API_URL_RPOD;

function handleExpiredToken() {
    localStorage.clear();
    window.location.href = "/login";
}

function handleError() {
    window.location.href = "/server";
}

export async function get(url) {
    return await axios
        .get(API_URL + url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response) => response.data)
        .catch((error) => {
            if (error.message === "Network Error") {
                handleError();
            } else if (error.response.status === 401) {
                handleExpiredToken();
            }
            return Promise.reject(error)
        })
}

export async function postSignIn(url, data) {
    return axios
        .post(API_URL + url, { ...data }, {
            headers: {
                'Authorization': localStorage.getItem("token"),
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.data)
        .catch((error) => {
            if (error.message === "Network Error") {
                handleError();
            }
            return Promise.reject(error)
        })
}

export async function post(url, data) {
    return axios
        .post(API_URL + url, { ...data }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response) => response.data)
        .catch((error) => {
            if (error.message === "Network Error") {
                handleError();
            } else if (error.response.status === 401) {
                handleExpiredToken();
            }
            return Promise.reject(error)
        })
}

export async function put(url, data) {
    return axios
        .put(API_URL + url, { ...data }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response) => response.data)
        .catch((error) => {
            if (error.message === "Network Error") {
                handleError();
            } else if (error.response.status === 401) {
                handleExpiredToken();
            }
            return Promise.reject(error)
        })
}

export async function del(url) {
    return await axios
        .delete(API_URL + url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response) => response.data)
        .catch((error) => {
            if (error.message === "Network Error") {
                handleError();
            } else if (error.response.status === 401) {
                handleExpiredToken();
            }
            return Promise.reject(error)
        })
} 