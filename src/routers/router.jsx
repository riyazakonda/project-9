import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layout/Home/Home";
import CategoryNews from "../Pages/Category/CategoryNews";
import Authlayout from "../layout/AuthLayout/Authlayout";
import Login from "../layout/Login/Login";
import Register from "../layout/Register/Register";

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
    element: <Authlayout></Authlayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <h4>error</h4>,
  },
]);
export default router;
