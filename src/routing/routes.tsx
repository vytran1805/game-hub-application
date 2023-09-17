import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./GameDetailPage";
import HomePage from "./HomePage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, //when path is "/", render homepage
        element: <HomePage />,
      },
      {
        path: "games/:id",
        element: <GameDetailPage />,
      },
    ],
  },
]);

export default router;
