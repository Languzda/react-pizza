import "./App.css";
import { HomePage, ErrorPage, ContactPage, MenuPage, AboutPage } from "./pages";
import Layout from "./Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        { path: "menu", element: <MenuPage /> },
        { path: "about", element: <AboutPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
