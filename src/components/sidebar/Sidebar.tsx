import React from "react";
import classes from "./Sidebar.module.css";
import ShowChartIcon from '@material-ui/icons/ShowChart';

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarWrapper}>
        <div className={classes.sidebarMenu}>
            <h3 className={classes.sidebarTitle}>Main</h3>
            <ul className={classes.sidebarList}>
                <li className={classes.sidebarListItem}>
                    <ShowChartIcon className={classes.sidebarIcon} />
                    Dashboard
                </li>
            </ul>
        </div>
        <div className={classes.sidebarMenu}>
            <h3 className={classes.sidebarTitle}>Forum</h3>
            <ul className={classes.sidebarList}>
                <li className={classes.sidebarListItem}>
                    Q&A
                </li>
            </ul>
        </div>
        <div className={classes.sidebarMenu}>
            <h3 className={classes.sidebarTitle}>Content</h3>
            <ul className={classes.sidebarList}>
                <li className={classes.sidebarListItem}>
                    Manage Posts
                </li>
                <li className={classes.sidebarListItem}>
                    Manage Categories
                </li>
            </ul>
        </div>
        <div className={classes.sidebarMenu}>
            <h3 className={classes.sidebarTitle}>Video</h3>
            <ul className={classes.sidebarList}>
                <li className={classes.sidebarListItem}>
                    Manage Video
                </li>
            </ul>
        </div>
        <div className={classes.sidebarMenu}>
            <h3 className={classes.sidebarTitle}>Users</h3>
            <ul className={classes.sidebarList}>
                <li className={classes.sidebarListItem}>
                    Manage Users
                </li>
            </ul>
        </div>
        <div className={classes.sidebarMenu}>
            <h3 className={classes.sidebarTitle}>Promotion</h3>
            <ul className={classes.sidebarList}>
                <li className={classes.sidebarListItem}>
                    Manage Promotion
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
