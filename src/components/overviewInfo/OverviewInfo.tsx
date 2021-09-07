import React from "react";
import classes from "./OverviewInfo.module.css";
import { People } from "@material-ui/icons";

interface Props {}

const OverviewInfo = (props: Props) => {
  return (
    <div className={classes.overview}>
      <div className={classes.overviewItem}>
        <span className={classes.overviewIcon}>
          <People />
        </span>
        <div className={classes.overviewNumberContainer}>
          <span className={classes.overviewNumber}>112</span>
          <span className={classes.overviewTitle}>Total user</span>
        </div>
      </div>

      <div className={classes.overviewItem}>
        <span className={classes.overviewIcon}>
          <People />
        </span>
        <div className={classes.overviewNumberContainer}>
          <span className={classes.overviewNumber}>112</span>
          <span className={classes.overviewTitle}>Total user</span>
        </div>
      </div>

      <div className={classes.overviewItem}>
        <span className={classes.overviewIcon}>
          <People />
        </span>
        <div className={classes.overviewNumberContainer}>
          <span className={classes.overviewNumber}>112</span>
          <span className={classes.overviewTitle}>Total user</span>
        </div>
      </div>

      <div className={classes.overviewItem}>
        <span className={classes.overviewIcon}>
          <People />
        </span>
        <div className={classes.overviewNumberContainer}>
          <span className={classes.overviewNumber}>112</span>
          <span className={classes.overviewTitle}>Total user</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewInfo;
