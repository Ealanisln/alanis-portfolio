import Link from "next/link";
import { useEffect, useState } from "react";
import { useSessionStorage } from "usehooks-ts";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const NavBar = () => {
  const [, setOpen] = useSessionStorage("drawer", false);
  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal">
            <li>
              <Link href="/">Home </Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
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
            {/* <ThemeSwitcher /> */}
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
