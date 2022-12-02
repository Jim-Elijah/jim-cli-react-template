import axios from "axios";
import { message } from "antd";
import { globalHistory } from './global.js'
import { baseURL } from './config'



axios.defaults.baseURL = baseURL;
axios.interceptors.request.use(
  (config) => {
    console.log('intercept request');
    console.log('globalHistory', globalHistory);
    // 可以在未登录时通过globalHistory跳转登录

    config.headers = {
      "Content-Type": "application/json",
      ...config.headers,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log("intercept response", response);
    return response;
  },
  (error) => {
    console.log("err", error);
    if (error.response) {
      console.log(error.response);
    } else {
      return Promise.reject(error);
    }
  }
);

export default function request(type = "get", url, params) {
  return new Promise((resolve, reject) => {
    const method = type.toLowerCase();
    const arr = ['get', 'delete']
    const data = arr.includes(method) ? { params } : params
    axios[method](url, data)
      .then((res) => {
        console.log(`res of ${method} ${url}:`, res);
        resolve(res.data);
      })
      .catch((err) => {
        console.error(`err of ${method} ${url}:`, err);
        message.error(err);
        reject(err);
      });
  });
}
