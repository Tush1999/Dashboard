import React, { useContext } from "react";

import { UserAuthContext } from "../contexts/user-auth";

const AuthElems = () => {
  const contextValue = useContext(UserAuthContext);
  const onLogout = contextValue?.onLogout;
  const userToken = contextValue?.userToken;

  return userToken ? (
    <button onClick={onLogout}>Log Out</button>
  ) : (
    <button>Log In</button>
  );
};

export default AuthElems;
