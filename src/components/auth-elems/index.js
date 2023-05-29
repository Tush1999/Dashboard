import React, { useContext } from "react";

import { UserAuthContext } from "../contexts/user-auth";

const AuthElems = () => {
  const { onLogout, userToken } = useContext(UserAuthContext);
  const handleClick = () => {
    debugger
    onLogout()
  }
  debugger
  return userToken ? <button onClick={handleClick}>Log Out</button> : <button>Log In</button>;
};

export default AuthElems;
