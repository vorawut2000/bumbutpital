import React from "react";

import classes from "./Navbar.module.css";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarWrapper}>
        <div>
          {/* <img
            src="/public/assets/bpt-logo.jpg"
            alt="test"
            className={classes.navLogo}
          /> */}
          <span className={classes.logo}>BUMBUTPITAL</span>
        </div>
        <div className={classes.navRight}>
          <img
            src="https://icon-library.com/images/username-icon/username-icon-18.jpg"
            alt=""
            className={classes.navAvatar}
          />
          Username
        </div>
      </div>
    </div>
  );
};

export default Navbar;
