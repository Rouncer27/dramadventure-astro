import React from "react";
import "./navSubMenu.scss";
import NavSubItem from "./NavSubItem";

const NavSubMenu = ({ subActive, items, origin }) => {
  return (
    <ul className={`sub-menu ${subActive ? "sub-active" : ""}`}>
      {items.map((item, index) => (
        <NavSubItem key={index} item={item} origin={origin} />
      ))}
    </ul>
  );
};

export default NavSubMenu;
