export const getUserToken = () => {
  return localStorage.getItem("auth-token");
};

export const setUserToken = (token) => {
  localStorage.setItem("auth-token", token);
};
