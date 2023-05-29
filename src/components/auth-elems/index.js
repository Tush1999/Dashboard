import React, { useContext } from "react";

import { UserAuthContext } from "../contexts/user-auth";

const AuthElems = () => {
  const { onLogout, userToken } = useContext(UserAuthContext);

  return userToken ? <div onClick={onLogout}>Log Out</div> : <div>Log In</div>;
};

export default AuthElems;
