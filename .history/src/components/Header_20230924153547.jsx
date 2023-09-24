import React, { useState } from "react";
import { BsList, BsX } from "react-icons/bs";

const styles = {
  navLinks:
    "text-xs ml-10 uppercase border-b border-white hover:border-[#F6B519] text-xl",
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return <div></div>;
};

export default Header;
