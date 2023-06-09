import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import AddPostForm from "./pages/AddPostForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  const { loggedUser } = useContext(AuthContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/profile/:id",
          element: <ProfilePage />,
        },
        {
          path: "/addPost/:id",
          element: <AddPostForm />,
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
