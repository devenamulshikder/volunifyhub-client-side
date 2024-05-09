import { useEffect, useState } from "react";
import logo from "../assets/assignment1102.png";

const NavBar = () => {
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
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <div className="font-bold flex flex-row items-center gap-5">
              <img className="w-12 mt-2" src={logo} alt="" />
              <p >
                <span className="hidden md:flex lg:flex">Volunify Hub</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <div>Home</div>
            </li>

            <li>
              <div>Need Volunteer Page</div>
            </li>
            <li>
              <div>Login</div>
            </li>
          </ul>

          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full" title="">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src=""
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div>Add Volunteer Post</div>
              </li>
              <li>
                <div>Manage My Post</div>
              </li>
              <li>
                <div>My Volunteer Requested Post</div>
              </li>
              <li className="mt-2">
                <button className="bg-gray-200 block text-center">
                  Logout
                </button>
              </li>
            </ul>
          </div>
          <input
            onChange={handleToggle}
            type="checkbox"
            className="toggle toggle-info ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
