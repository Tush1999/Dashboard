import React, { useContext } from "react";

import { UserAuthContext } from "../contexts/user-auth";

const Login: React.FC = () => {
  const contextValue = useContext(UserAuthContext);

  const setUserName = contextValue?.setUserName;
  const setUserPassword = contextValue?.setUserPassword;
  const handleSubmit = contextValue?.handleSubmit;
  const errors = contextValue?.errors;

  return (
    <div className="login">
      <div className="container">
        <div className="login-inner">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="pb20">
              <label htmlFor="username">Enter your username</label>
              <input
                type="text"
                id="username"
                placeholder="Your Username"
                onChange={(e) => setUserName?.(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Enter your password</label>
              <input
                type="password"
                id="password"
                placeholder="Your Password"
                onChange={(e) => setUserPassword?.(e.target.value)}
              />
            </div>
            <div className="err-msg">{errors}</div>
            <button type="submit" className="mt20 width-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
