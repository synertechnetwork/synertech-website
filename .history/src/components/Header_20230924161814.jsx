import React, { useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";

const styles = {
  navLinks:
    "text-xs ml-10 uppercase border-b border-white hover:border-[#F6B519] text-xl",
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="">
      <nav className="w-full h-20 shadow-xl bg-slate-200">
        {/* Desktop Menu */}
        <div className="flex items-center justify-between h-full px-4 w-full">
          <Link to="/">
            <img
              src="synertech-logo"
              alt="logo"
              width={80}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
  return <div></div>;
};

export default Header;
