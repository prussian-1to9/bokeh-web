import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import LoadingPage from "@pages/LoadingPage";
const Home = lazy(() => import("@pages/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <LoadingPage/>
      </Suspense>
    )
  }
]);

export default router;
