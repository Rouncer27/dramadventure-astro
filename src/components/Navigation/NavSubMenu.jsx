import React from "react";
import "./navSubMenu.scss";
import NavSubItem from "./NavSubItem";

const NavSubMenu = ({ subActive, items }) => {
  return (
    <ul className={`sub-menu ${subActive ? "sub-active" : ""}`}>
      {items.map((item) => (
        <NavSubItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default NavSubMenu;
