import React, { useState } from "react";
import NavButton from "./NavButton";
import "./topNav.scss";
import NavDrawer from "./NavDrawer";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [btnChecked, setBtnChecked] = useState(false);

  console.log("isOpen", isOpen);

  return (
    <div className="top-mobile-nav">
      <NavButton
        setIsOpen={setIsOpen}
        btnChecked={btnChecked}
        setBtnChecked={setBtnChecked}
      />
      <NavDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setBtnChecked={setBtnChecked}
      />
      {/* {!!isOpen && <BlurBackground />} */}
    </div>
  );
};

export default TopNav;
