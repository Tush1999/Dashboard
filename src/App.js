import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/login";
import Dashboard from "./components/user-dashboard";
import { UserAuthContext } from "./components/contexts/user-auth";
import ErrorBoundary from "./components/error-boundary";
import PageNotFound from "./components/page-not-found";

import "./App.css";

function App() {
  const { userToken } = useContext(UserAuthContext);

  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route
            exact
            path="/dashboard"
            element={userToken ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/login"
            element={userToken ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            path="/"
            element={<Navigate to={`${userToken ? "/dashboard" : "/login"}`} />}
          />
          <Route path="*" exact element={<PageNotFound />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
