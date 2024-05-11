import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import AddVolunteer from "../pages/AddVolunteer";
import NeedVolunteer from "../pages/NeedVolunteer";
import VolunteerNeedDetails from "../components/VolunteerNeedDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addVolunteerPost",
        element: (
          <PrivateRoute>
            <AddVolunteer />
          </PrivateRoute>
        ),
      },
      {
        path: "/needVolunteer",
        element: (
          <PrivateRoute>
            <NeedVolunteer />
          </PrivateRoute>
        ),
      },
      {
        path: "/volunteerNeedDetails/:id",
        loader:({params})=>fetch(`http://localhost:9000/volunteerNeedDetails/${params.id}`),
        element: (
          <PrivateRoute>
            <VolunteerNeedDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
