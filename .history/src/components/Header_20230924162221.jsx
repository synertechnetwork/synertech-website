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

          <div className="text-white hidden sm:flex">
            <ul className="hidden sm:flex">
              <li className={styles.navLinks}>
                <Link href="/about">About</Link>{" "}
              </li>
              <li className={styles.navLinks}>
                <Link href="/contact">Contact</Link>{" "}
              </li>
              <li className="flex items-center space-x-5 text-[#F6B519] ml-10">
                <h3 className="cursor-pointer border border-[#f6b519] px-4 py-1 rounded-full text-xs bg-[#f5b519] text-black hover:bg-black hover:text-[#f6b519] ease-in-out duration-300">
                  Sign In
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
  return <div></div>;
};

export default Header;
