import React, { useContext } from "react";

import { UserAuthContext } from "../contexts/user-auth";

import styles from "./main.module.css";

const Login = () => {
  const {
    setUserName,
    setUserPassword,
    handleSubmit,
    errors = ""
  } = useContext(UserAuthContext);

  return (
    <div className={styles.container}>
      <div>Login Up Page</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Enter your username</label>
          <input
            type="text"
            id="username"
            placeholder="Your Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Enter your password</label>
          <input
            type="password"
            id="password"
            placeholder="Your Password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <div>{errors}</div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
