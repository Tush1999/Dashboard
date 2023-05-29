import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

import { getUserToken, setUserToken } from "../../helpers/auth";

export const UserAuthContext = createContext(null);

const DEFAULT_ARR = [];

const UserAuthProvider = ({ children = null }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [authenticatedUsers, setAuthenticatedUsers] = useState(DEFAULT_ARR);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [errors, setErrors] = useState("");

  const onLogout = () => {
    setUserToken("");
    setIsAuthenticated(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const isAuthenticatedUser = authenticatedUsers.some(
      ({ name, password }) => {
        return userName === name && userPassword === password;
      }
    );

    if (!isAuthenticatedUser) {
      setErrors("This user is not authenticated");
    }

    if (isAuthenticatedUser) {
      setUserToken(userName);
      setIsAuthenticated(isAuthenticatedUser);
      setErrors("");
    }
  };

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await axios.get("/users.json");
        setAuthenticatedUsers(response.data.users);
        return response;
      } catch {
        throw new Error("Invalid Request");
      }
    };
    fetchUsersData();
  }, []);

  return (
    <UserAuthContext.Provider
      value={{
        userName,
        setUserName,
        userPassword,
        setUserPassword,
        handleSubmit,
        isAuthenticated,
        onLogout,
        userToken: getUserToken(),
        errors
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;
