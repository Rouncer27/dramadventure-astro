import React, { useState } from "react";
import NavSubMenu from "./NavSubMenu";
import "./navItem.scss";

const NavItem = ({ item }) => {
  //   const slug = item.url
  //     .split("/")
  //     .filter((item) => item !== "")
  //     .join("/");

  const [subActive, setSubActive] = useState(false);

  const handleToggleActive = () => {
    setSubActive(!subActive);
  };

  return (
    <li className="menu-item">
      <a href={item.menuItem.destination.uri}>{item.menuItem.label}</a>
      {item.subMenuItems && (
        <div className="sub-wrap">
          <button
            onClick={() => {
              handleToggleActive();
            }}
          >
            {subActive ? <>&#8722;</> : <>&#43;</>}
          </button>
          <div className="subContainer">
            <NavSubMenu subActive={subActive} items={item.subMenuItems} />
          </div>
        </div>
      )}
    </li>
  );
};

export default NavItem;
