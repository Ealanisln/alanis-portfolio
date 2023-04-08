import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";
import { themeChange } from "theme-change";

export default function SwitchTheme() {

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      themeChange(true);
    } else if (theme === "lemonade") {
      themeChange(false);
    }
  }, []);
  
  const handleToggle = (event:any) => {
    const isDarkMode = event.target.checked;
    themeChange(isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "lemonade");
  };
  
  return (
    <div className="flex gap-2">
      <Sun />
      <input
        type="checkbox"
        className="toggle"
        data-toggle-theme="lemonade,dark"
        onChange={handleToggle}
      />
      <Moon />
    </div>
  )
}