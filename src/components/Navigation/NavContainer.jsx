import React from "react";
import "./navContainer.scss";
import NavItem from "./NavItem";

const TopNavContainer = ({ navitems, origin }) => {
  const topNavItems = navitems.filter((item) => item.parentDatabaseId === 0);
  const subNavItems = navitems.filter((item) => item.parentDatabaseId !== 0);
  const navItemsWithSubs = topNavItems.map((item) => {
    const itemWithSubs = subNavItems.filter(
      (subItem) => subItem.parentDatabaseId === item.databaseId,
    );
    item.subItems = itemWithSubs;
    return item;
  });

  return (
    <nav className="nav-container">
      <ul className="main-mobile-nav">
        {navitems.map((item, index) => (
          <NavItem key={index} item={item} origin={origin} />
        ))}
      </ul>
    </nav>
  );
};

export default TopNavContainer;
