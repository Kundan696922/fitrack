import { useState } from "react";
import { Link } from "react-router";
import { Dumbbell, CopyPlus, Sun, Moon } from "lucide-react";
import { useEffect } from "react";

const Navbar = ({ setSearch }) => {
  const [query, setQuery] = useState("");
   const [theme, setTheme] = useState("forest");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSearch(value);
  };



  const toggleMode = (e) => { 
    const newTheme = theme === "forest" ? "emerald" : "forest";
    setTheme(newTheme);
  }

   useEffect(() => {
     document.documentElement.setAttribute("data-theme", theme);
   }, [theme]);


  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-primary font-mono tracking-tight flex">
            FitRack
            <Dumbbell />
          </h1>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={handleSearch}
              className="input input-bordered w-24 md:w-auto"
            />
            <Link to={"/create"} className="btn btn-primary ">
              {/* <NotebookPen className="size-5" /> */}
              <CopyPlus className="size-4 md:size-5 lg:size-5" />
            </Link>
            <button className="btn btn-secondary" onClick={toggleMode}>
              {theme === "forest" ? (
                <Sun className="size-4 md:size-5 lg:size-5" />
              ) : (
                <Moon className="size-4 md:size-5 lg:size-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
