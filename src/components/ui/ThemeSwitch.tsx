"use client";

import { themes } from "@/config";
import { useEffect, useState } from "react";
import { Icon } from "@/components";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") ?? themes.light);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e: any) => {
    if (e.target.checked) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        onChange={handleToggle}
        checked={theme === themes.light}
      />
      <Icon name="SunMedium" className="swap-on fill-current w-10 h-10" />
      <Icon name="Moon" className="swap-off fill-current w-10 h-10" />
    </label>
  );
}
