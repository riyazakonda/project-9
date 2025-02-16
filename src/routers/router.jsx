import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layout/Home/Home";
import CategoryNews from "../Pages/Category/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <Navigate to="/category/01"></Navigate>,
      },
      {
        path: "category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "news",
    element: <h2>news layout</h2>,
  },
  {
    path: "auth",
    element: <h2>Login</h2>,
  },
  {
    path: "*",
    element: <h4>error</h4>,
  },
]);
export default router;
