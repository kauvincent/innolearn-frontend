import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Profiling from "./features/profiling/profiling";
import Recommendation from "./features/recommendation/recommendation";
import Assessment from "./features/assessment/assessment";
import Tutoring from "./features/tutoring/tutoring";
import Engagement from "./features/engagement/engagement";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "dashboard",
        element: <Profile />,
      },
      {
        path: "agents",
        children: [
          {
            path: "profiling",
            element: <Profiling />,
          },
          {
            path: "recommendation",
            element: <Recommendation />,
          },
          {
            path: "assessment",
            element: <Assessment />,
          },
          {
            path: "tutoring",
            element: <Tutoring />,
          },
          {
            path: "engagement",
            element: <Engagement />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);