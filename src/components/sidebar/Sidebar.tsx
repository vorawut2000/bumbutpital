import React from "react";
import { Link } from "react-router-dom";

import classes from "./Sidebar.module.css";

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarWrapper}>
        <div className={classes.sidebarMenu}>
          <h3 className={classes.sidebarTitle}>Main</h3>
          <ul className={classes.sidebarList}>
            <Link to="/home" className={classes.sidebarLink}>
              <li className={classes.sidebarListItem}>Dashboard</li>
            </Link>
          </ul>
        </div>
        <div className={classes.sidebarMenu}>
          <h3 className={classes.sidebarTitle}>Forum</h3>
          <ul className={classes.sidebarList}>
            <Link to="/forum" className={classes.sidebarLink}>
              <li className={classes.sidebarListItem}>Q&A</li>
            </Link>
          </ul>
        </div>
        <div className={classes.sidebarMenu}>
          <h3 className={classes.sidebarTitle}>Content</h3>
          <ul className={classes.sidebarList}>
            <Link to="/posts" className={classes.sidebarLink}>
              <li className={classes.sidebarListItem}>Manage Posts</li>
            </Link>
            <Link to="/postCategories" className={classes.sidebarLink}>
              <li className={classes.sidebarListItem}>Manage Categories</li>
            </Link>
          </ul>
        </div>
        <div className={classes.sidebarMenu}>
          <h3 className={classes.sidebarTitle}>Video</h3>
          <ul className={classes.sidebarList}>
            <Link to="/video" className={classes.sidebarLink}>
              <li className={classes.sidebarListItem}>Manage Video</li>
            </Link>
          </ul>
        </div>
        <div className={classes.sidebarMenu}>
          <h3 className={classes.sidebarTitle}>Users</h3>
          <ul className={classes.sidebarList}>
            <Link to="/user" className={classes.sidebarLink}>
              <li className={classes.sidebarListItem}>Manage Users</li>
            </Link>
          </ul>
        </div>
        <div className={classes.sidebarMenu}>
          <h3 className={classes.sidebarTitle}>Promotion</h3>
          <ul className={classes.sidebarList}>
            <Link to="/promotion" className={classes.sidebarLink}>
              <li className={classes.sidebarListItem}>Manage Promotion</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
