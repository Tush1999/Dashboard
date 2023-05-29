import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/login";
import Dashboard from "./components/user-dashboard";
import {
  UserAuthContext,
  UserAuthContextProps
} from "./components/contexts/user-auth.tsx";
import ErrorBoundary from "./components/error-boundary";
import PageNotFound from "./components/page-not-found";
import "./stylesheets/index.css";

function App(): JSX.Element {
  const contextValue = useContext<UserAuthContextProps | null>(UserAuthContext);
  const userToken = contextValue?.userToken;
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route
            path="/dashboard"
            element={userToken ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={userToken ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            path="/"
            element={<Navigate to={`${userToken ? "/dashboard" : "/login"}`} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
