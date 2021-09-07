import React from "react";
import Chart from "../../components/chart/Chart";
import OverviewInfo from "../../components/overviewInfo/OverviewInfo";
import classes from "./Home.module.css";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className={classes.home}>
      <h1 className={classes.dashboardTitle}>Overview</h1>
      <OverviewInfo />
      <Chart />
    </div>
  );
};

export default Home;
