"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components";
import { themes } from "@/config";

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
    <label className="swap swap-rotate" aria-label="Theme">
      <input
        type="checkbox"
        className="theme-controller"
        onChange={handleToggle}
        checked={theme === themes.light}
      />
      <Icon name="SunMedium" className="swap-on fill-current size-10" />
      <Icon name="Moon" className="swap-off fill-current size-10" />
    </label>
  );
}
