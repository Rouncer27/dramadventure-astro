import React from "react";
import NavContainer from "./NavContainer";
import "./navDrawer.scss";

const response = await fetch(`https://dramadventure.swbdatabases2.ca/graphql`, {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    query: `
      query MainMenuQuery {
          mainMenu {
              mainMenu {
                callToActionButton {
                  destination {
                    ... on Page {
                      link
                
                    }
                  }
                  label
                  fieldGroupName
                }
                menuItems {
  
                  menuItem {
                    label
                    destination {
                      ... on Page {
                        link
                        uri
                      }
                    }
                  }
                  subMenuItems {
                    label
                    linkType
                    slug
                    destination {
                      ... on Page {
                        id
                        link
                        uri
                      }
                    }
                }
            }
          }   
        }
      }
    `,
  }),
});

const { data } = await response.json();
const { menuItems, callToActionButton } = data.mainMenu.mainMenu;

const NavDrawer = ({ isOpen, setIsOpen, setBtnChecked, origin }) => {
  return (
    <div className={`nav-drawer ${isOpen ? "active" : ""}`}>
      <div className="main-nav-wrapper">
        <div className="side-logo">
          <div></div>
        </div>
        <NavContainer navitems={menuItems} origin={origin} />
      </div>
    </div>
  );
};

export default NavDrawer;
