import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Dashboard, Docs, Home, Profile } from "./pages";
import { AuthLayout, Login, SignUp } from "./pages/GraphQLAuth";
import { PageNotFound, ProtectedAuthLayout } from "./components";

import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path="/"
        element={
          <ProtectedAuthLayout authentication={true}>
              <Home />
          </ProtectedAuthLayout>
        }
      />
      <Route
        path="/docs"
        element={
          <ProtectedAuthLayout authentication={true}>
              <Docs />
          </ProtectedAuthLayout>
        }
      />
      <Route
        path="/login"
        element={
          <ProtectedAuthLayout authentication={true}>
            <AuthLayout>
              <Login />
            </AuthLayout>
          </ProtectedAuthLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <ProtectedAuthLayout authentication={true}>
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          </ProtectedAuthLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedAuthLayout authentication={true}>
            <Dashboard />
          </ProtectedAuthLayout>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export { router, RouterProvider };
