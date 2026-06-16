import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { userDetailLoader, userLoader } from "./loaders/user-loader.ts";
import { UserList } from "./components/UserList.tsx";
import { UserForm } from "./components/UserForm.tsx";
import { UserDetail } from "./components/UserDetail.tsx";
import {
  createUserAction,
  deleteUserAction,
  updateUserAction,
} from "./actions/user-actions.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <UserList />,
        loader: userLoader,
      },
      {
        path: "users/new",
        element: <UserForm />,
        action: createUserAction,
      },
      {
        path: "users/:id",
        element: <UserDetail />,
        loader: userDetailLoader,
      },
      {
        path: "users/:id/edit",
        element: <UserForm />,
        loader: userDetailLoader,
        action: updateUserAction,
      },
      {
        path: "users/:id/delete",
        action: deleteUserAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
