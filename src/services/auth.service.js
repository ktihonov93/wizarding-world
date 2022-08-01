import axios from "axios";
const API_URL = "https://jkqvpo.csb.app/api/auth/";
const register = (username, email, password) => {
  /*
  return axios.post(API_URL + "signup", {
    username,
    email,
    password
  });
  */

  localStorage.setItem(
    username,
    JSON.stringify({
      email,
      username,
      password
    })
  );
  let user = JSON.parse(localStorage.getItem(username));
  console.log("user after parse", user);
  return Promise.resolve(user);
};
const login = (username, password) => {
  let UserInStorage = localStorage.getItem(username);
  console.log(UserInStorage, UserInStorage);
  return Promise.resolve(UserInStorage);
  /*
  return axios
    .post(API_URL + "signin", {
      username,
      password
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
    */
};
const logout = () => {
  localStorage.removeItem("user");
};
const authService = {
  register,
  login,
  logout
};
export default authService;
