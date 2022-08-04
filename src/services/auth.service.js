const register = (username, email, password) => {
  if (JSON.parse(localStorage.getItem(username))) {
    return Promise.reject(new Error("User with this username already exists!"));
  } else {
    localStorage.setItem(
      username,
      JSON.stringify({
        email,
        username,
        password,
      })
    );
    let user = JSON.parse(localStorage.getItem(username));
    return Promise.resolve(user);
  }
};

const login = (username, password) => {
  let UserInStorage = localStorage.getItem(username);
  console.log("UserInStorage", UserInStorage);
  return Promise.resolve(UserInStorage);
};

const logout = () => {
  localStorage.removeItem("user");
};
const authService = {
  register,
  login,
  logout,
};
export default authService;
