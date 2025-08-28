import { useState, useEffect } from "react";
import { applyTheme } from "./spaghetti"; // adjust path
import { BiSolidCarCrash } from "react-icons/bi"; // supercar
import { GiSandsOfTime } from "react-icons/gi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.theme || "system");

  useEffect(() => {
    applyTheme();
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      localStorage.theme = "light";
      setTheme("light");
    }
     else {
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };

  return (
    <div className="flex flex-wrap justify-end w-full">
      <button
        className="px-8 rounded text-black dark:text-white hover:cursor-pointer"
        onClick={toggleTheme}
      >
        <GiSandsOfTime   size={20} /> {/* or <MdComputer size={20} /> */} 
      </button>
    </div>
  );
}
