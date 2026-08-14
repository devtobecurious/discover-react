import { createBrowserRouter } from "react-router";
import App from "../../App";
import { Home } from "../../pages/Home";
import { AddNewSessionPage } from "../../features/training-sessions/pages/AddNewSessionPage";
import { ListSessionsPage } from "@/features/training-sessions/pages/ListSessionsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "sessions",
        children: [
          { index: true, path: '', element: <ListSessionsPage />},
          { path: 'add', element: <AddNewSessionPage />}
        ],
      },
    ],
  },
]);

export default router;
