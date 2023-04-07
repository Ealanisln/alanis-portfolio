import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { useSessionStorage } from "usehooks-ts";

const themeValues = ["cupcake", "halloween", "bumblebee", "dark"];

const NavBar = () => {
  const [, setOpen] = useSessionStorage("drawer", false);
  const toggleDrawer = () => setOpen((prev) => !prev);

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for React projects
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal">
            <li>
              <a>Home </a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-none lg:hidden">
        <label className="btn btn-square btn-ghost" onClick={toggleDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
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
