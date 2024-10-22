import React from "react";
import { Route, Routes } from "react-router-dom";
import { initPath } from "../../config";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={`${initPath}/auth/*`} element={<AuthRoutes />} />
      <Route path={`${initPath}/*`} element={<JournalRoutes />} />
    </Routes>
  );
};
