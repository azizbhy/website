import { setCookie, getCookie, deleteCookie } from "./cookies";

import {
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage,
} from "./localStorage";

export const _Authentication = (token, user) => {
  setCookie("token", token);
  setLocalStorage("user", user);
  console.log(user)
};

export const _isAuthenticated = () => {
  if (getCookie("token") && getLocalStorage("user")) {
    return getLocalStorage("user");
  } 
    return false;
};

export const logout = (next) => {
  deleteCookie("token");
  deleteLocalStorage("user");

  console.log("done")

};