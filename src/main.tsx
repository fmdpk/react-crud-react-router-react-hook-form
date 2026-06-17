import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        lazy: {
          loader: async () =>
            (await import("./loaders/user-loader.ts")).userLoader,
          Component: async () =>
            (await import("./components/UserList.tsx")).UserList,
        },
      },
      {
        path: "users/new",
        lazy: {
          action: async () =>
            (await import("./actions/user-actions.ts")).createUserAction,
          Component: async () =>
            (await import("./components/UserForm.tsx")).UserForm,
        },
      },
      {
        path: "users/:id",
        lazy: {
          loader: async () =>
            (await import("./loaders/user-loader.ts")).userDetailLoader,
          Component: async () =>
            (await import("./components/UserDetail.tsx")).UserDetail,
        },
      },
      {
        path: "users/:id/edit",
        lazy: {
          loader: async () =>
            (await import("./loaders/user-loader.ts")).userDetailLoader,
          action: async () =>
            (await import("./actions/user-actions.ts")).updateUserAction,
          Component: async () =>
            (await import("./components/UserForm.tsx")).UserForm,
        },
      },
      {
        path: "users/:id/delete",
        lazy: {
          action: async () =>
            (await import("./actions/user-actions.ts")).deleteUserAction,
        },
      },
      {
        path: "form",
        lazy: {
          Component: async () =>
            (await import("./components/ReactHookForm.tsx")).ReactHookForm,
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
