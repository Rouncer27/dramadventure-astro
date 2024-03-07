import React from "react";

const NavSubItem = ({ item }) => {
  //   const slug = item.url
  //     .split("/")
  //     .filter(item => item !== "")
  //     .join("/")

  const slug = "";

  return (
    <li class="menu-sub-item">
      <a href={`/${item.slug}`}>{item.label}</a>
    </li>
  );
};

export default NavSubItem;
