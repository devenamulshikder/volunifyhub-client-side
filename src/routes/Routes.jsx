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
import VolunteerNeedPostDetailsPage from "../components/VolunteerNeedPostDetailsPage";
import ManageMyPost from "../pages/ManageMyPost";
import UpdatePage from "../pages/UpdatePage";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";

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
        path: "/manageMyPost/:email",
        element: (
          <PrivateRoute>
            <ManageMyPost />
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
        element: (
          <PrivateRoute>
            <VolunteerNeedDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://volunify-hub-server.vercel.app/volunteerNeedDetails/${params.id}`),
      },
      {
        path: "/VolunteerNeedPostDetailsPage/:id",
        element: (
          <PrivateRoute>
            <VolunteerNeedPostDetailsPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://volunify-hub-server.vercel.app/VolunteerNeedPostDetailsPage/${params.id}`
          ),
      },
      {
        path: "/updatePage/:id",
        element: (
          <PrivateRoute>
            <UpdatePage />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://volunify-hub-server.vercel.app/updatePage/${params.id}`),
      },
      {
        path:'/update-profile',
        element:<UpdateProfile/>
      }
    ],
  },
]);

export default router;
