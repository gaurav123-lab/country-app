import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";

import Layout from "./Compotent/Layout";
import Error from "./pages/error";
import CountryDetails from "./Compotent/CountryDetails";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
   errorElement:<Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
         {
          path: "country/:id",
          element: <CountryDetails />,
        },
        {
          path: "country",
          element: <Country />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
