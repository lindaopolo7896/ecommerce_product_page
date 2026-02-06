import React from "react";
import Logo from "../images/logo.svg";
import Profile from "../images/image-avatar.png";
import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Navbar({ onClick, count }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <div className="navbar">
      <div className="left">
        <div className="logoHolder">
          <IoMdMenu className="menu" onClick={handleOpen} />

          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className={`sidebar ${open === true ? "open" : ""}`}>
          <IoMdClose className="closeIcon" onClick={handleClose} />
          <ul className="nav-items">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="right">
        <div>
          <IoCartOutline className="cartIcon" onClick={onClick} />
          {count > 0 && <p className="countHolder">{count}</p>}
        </div>
        <img src={Profile} alt="avatar" className="avatar" />
      </div>
    </div>
  );
}

export default Navbar;
