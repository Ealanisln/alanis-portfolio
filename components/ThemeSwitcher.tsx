"use client";
import { useEffect } from "react";
import { Moon, Sun } from "react-feather";
import { themeChange } from "theme-change";

export default function SwitchTheme({}) {
    
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for React projects
  }, []);

  return (
    <div className="flex gap-2">
      <Sun />
      <input
        type="checkbox"
        className="toggle"
        data-toggle-theme="dark,light"
      />
      <Moon />
    </div>
  );
}