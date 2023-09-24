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
              src="./synertech-logo.jpeg"
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

          {/* Mobile Menu */}
          <div
            onClick={(e) => setMenuOpen(!menuOpen)}
            className="sm:hidden cursor-pointer pl-24"
          >
            <BsList className="h-8 w-8 text-[#f6b519]" />
          </div>
        </div>

        <div
          className={
            menuOpen
              ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div
              onClick={(e) => setMenuOpen(!menuOpen)}
              className="cursor-pointer"
            >
              <BsX className="h-8 w-8 text-[#F6B519] " />
            </div>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-col py-4 ">
            <ul>
              <li
                onClick={(e) => setMenuOpen(false)}
                className="py-4 hover:underline hover:decoration-[#f6b519]"
              >
                <Link href="/about">About</Link>
              </li>
              <li
                onClick={(e) => setMenuOpen(false)}
                className="py-4 hover:underline hover:decoration-[#f6b519]"
              >
                <Link href="/contact">Contact</Link>
              </li>
              <li className="flex items-center py-4 text-[#f6b519]">
                <p className="cursor-pointer px-4 py-1 rounded-full bg-[#f6b519] text-black hover:bg-black hover:text-[#f6b519] ease-in-out duration">
                  Sign In
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
