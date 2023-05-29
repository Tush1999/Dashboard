import React, {
  createContext,
  useEffect,
  useState,
  PropsWithChildren
} from "react";
import axios from "axios";

import { getUserToken, setUserToken } from "../../helpers/auth";

export interface User {
  name: string;
  password: string;
}

export interface UserAuthContextProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  userPassword: string;
  setUserPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (evt: React.FormEvent) => void;
  isAuthenticated: boolean | null;
  onLogout: () => void;
  userToken: string | null;
  errors: string;
}

export const UserAuthContext = createContext<UserAuthContextProps | null>(null);

const DEFAULT_ARR: User[] = [];

const UserAuthProvider: React.FC<PropsWithChildren<UserAuthContextProps>> = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [authenticatedUsers, setAuthenticatedUsers] =
    useState<User[]>(DEFAULT_ARR);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [errors, setErrors] = useState("");

  const userToken = getUserToken()

  const onLogout = () => {
    setUserToken("");
    setIsAuthenticated(false);
  };

  const handleSubmit = (evt: React.FormEvent) => {
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
        const response = await axios.get<{ users: User[] }>("/users.json");
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
        userToken,
        errors
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;
