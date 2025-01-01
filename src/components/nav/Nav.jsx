import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { TbMessage } from "react-icons/tb";
const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        className={active === "#home" ? "active" : ""}
        onClick={() => setActive("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={active === "#about" ? "active" : ""}
        onClick={() => setActive("#about")}
      >
        <FaRegUser />
      </a>
      <a
        href="#experience"
        className={active === "#experience" ? "active" : ""}
        onClick={() => setActive("#experience")}
      >
        <MdOutlineWorkOutline />
      </a>
      <a
        href="#service"
        className={active === "#service" ? "active" : ""}
        onClick={() => setActive("#service")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={active === "#contact" ? "active" : ""}
        onClick={() => setActive("#contact")}
      >
        <TbMessage />
      </a>
    </nav>
  );
};

export default Nav;
