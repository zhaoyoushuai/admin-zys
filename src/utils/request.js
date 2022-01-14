import axios from "axios";

// 请求成功
const ERRS_OK = 0;
// token 失效或未登录
const ERRS_INVALID = 40010;

const server = axios.create({
  baseURL: "",
  timeout: 2000,
});

server.interceptors.request.use((config) => {
  return config;
});

server.interceptors.response.use((response) => {
  const { data } = response;
  if (data.code === ERRS_OK) {
    return data;
  } else {
    return Promise.reject(response.data);
  }
});
