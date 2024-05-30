import { useContext, useEffect, useState } from "react";
import logo from "../assets/assignment1102.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successful");
      })
      .catch((err) => toast.error(err?.message));
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <div className="font-bold flex flex-row items-center gap-5">
              <Link to="/">
                {" "}
                <img className="w-12 mt-2" src={logo} alt="" />
              </Link>
              <p>
                <span className="hidden md:flex lg:flex lg:text-2xl md:text-xl">
                  Volunify <span className="text-[#7ec242]">Hub</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <ul className=" flex items-center gap-5">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "pb-1 border-b-0 text-[#7ec242] lg:border-b-2 border-[#73cac2] font-bold"
                    : "font-bold "
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "pb-1 border-b-0 text-[#7ec242] lg:border-b-2 border-[#73cac2] font-bold"
                    : "font-bold "
                }
                to="/needVolunteer"
              >
                Need Volunteer Page
              </NavLink>
            </li>

            {!user && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "pb-1 border-b-0 text-[#7ec242] lg:border-b-2 border-[#73cac2] font-bold"
                      : "font-bold "
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>

          {user && (
            <div className="dropdown dropdown-end z-50 ml-3">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/addVolunteerPost">Add Volunteer Post</Link>
                </li>
                <li>
                  <Link to="/manageMyPost/:email">Manage My Post</Link>
                </li>
                <li>
                  <Link to="/update-profile">Update Your Profile</Link>
                </li>

                <li className="mt-2">
                  <button
                    onClick={handleLogOut}
                    className="bg-gray-200 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
          <label className="cursor-pointer grid place-items-center ml-2">
            <input
              onChange={handleToggle}
              type="checkbox"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 "
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
