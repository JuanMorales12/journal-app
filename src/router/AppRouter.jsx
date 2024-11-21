import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { initPath } from "../../config";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

import { CheckingAuth } from "../ui";

import { useCheckAuth } from "../hooks";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path={`${initPath}/*`} element={<JournalRoutes />} />
      ) : (
        <Route path={`${initPath}/auth/*`} element={<AuthRoutes />} />
      )}
      <Route
        path={`${initPath}/*`}
        element={<Navigate to={`${initPath}/auth/login`} />}
      />
    </Routes>
  );
};
