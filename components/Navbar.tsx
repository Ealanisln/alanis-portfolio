import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const themeValues = ["cupcake", "drakula", "bumblebee", "dark"];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for React projects
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center flex items-center">
        <a className="btn btn-ghost normal-case text-xl">Alanis Web Dev</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-rectangle">
          <div className="flex">
            <select
              className="text-primary rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 bg-white dark:bg-gray-800"
              data-choose-theme
            >
              {themeValues.map((value) => (
                <option className="text-primary" key={value.toLowerCase()}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
