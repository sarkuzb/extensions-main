import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";

function Header() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header
      className="max-w-6xl mx-auto m-5 px-[12px] py-[8px] rounded-2xl flex justify-between items-center"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <img src={logo} alt="Logo" className="h-8" />

      <button className="" onClick={toggleTheme}>
        {isDark ? (
          <div className="bg-gray-700 p-[7px] rounded-xl hover:bg-gray-600 cursor-pointer border-2 border-gray-700 hover:border-gray-600 active:ring-2 ring-red-400">
            <img src={sun} alt="Switch to Light Mode" className="h-6 w-6" />
          </div>
        ) : (
          <div className="bg-neutral-200 p-[7px] rounded-xl hover:bg-neutral-300 cursor-pointer border-2 border-neutral-200 hover:border-neutral-300 active:ring-2 ring-red-400">
            {" "}
            {/* light background for moon */}
            <img src={moon} alt="Switch to Dark Mode" className="h-6 w-6" />
          </div>
        )}
      </button>
    </header>
  );
}

export default Header;
