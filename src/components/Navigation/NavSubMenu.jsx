import React from "react";
import "./navSubMenu.scss";
import NavSubItem from "./NavSubItem";

const NavSubMenu = ({ subActive, items }) => {
  return (
    <ul className={`sub-menu ${subActive ? "sub-active" : ""}`}>
      {items.map((item, index) => (
        <NavSubItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default NavSubMenu;
