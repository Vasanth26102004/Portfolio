import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useRef } from "react";
import "./Navbar.css"
import menu_icon from "../Assets/svg/menu.svg";
import home from "../assets/svg/home.svg";
import person from "../assets/svg/person.svg";
import dev from "../assets/svg/developer_mode_tv.svg";
import desc from "../assets/svg/description.svg";
import codebranch from "../assets/codebranch.png"

const navbar = () => {
  const menu = useState("");
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-active");
    e.target.classList.toggle("open");
  };  

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if (window.scrollY > 50) {
      return document.querySelector(".navbar").classList.add("active")
      }else{
        return document.querySelector(".navbar").classList.remove("active")
      } 
    });
  });

  return (
      <div className="navbar">
        <div className="nav-logo">
          <p>.va</p>
        </div>
        <img
          className="nav-dropdown"
          onClick={dropdown_toggle}
          src={menu_icon}
          alt=""
        />
        <ul ref={menuRef} className="nav-menu" 
          onClick={dropdown_toggle}>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
            <p><img src={home}/>Home</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/about">
            <p><img src={person}/>About</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/project">
            <p><img src={dev}/>Project</p>
            </Link>
          </li>
          <li >
            <Link style={{ textDecoration: "none" }} to="/resume">
            <p><img src={desc}/>Resume</p>
            </Link>
          </li>
        </ul>
        <div className="nav-github">
          <a href="https://github.com/Vasanth26102004/Portfolio ">
            <button><img src={codebranch} alt="" /></button>
          </a>
        </div>
      </div>
  );
};

export default navbar;
