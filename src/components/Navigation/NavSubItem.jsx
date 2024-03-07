import React from "react";

const NavSubItem = ({ item, origin }) => {
  //   const slug = item.url
  //     .split("/")
  //     .filter(item => item !== "")
  //     .join("/")

  const slug = "";

  return (
    <li className="menu-sub-item">
      <a href={`${origin}/${item.slug}`}>{item.label}</a>
    </li>
  );
};

export default NavSubItem;
