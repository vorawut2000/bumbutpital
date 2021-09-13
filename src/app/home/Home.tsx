import React from "react";
import Chart from "../../components/dashboardCard/Chart";
import ContentCard from "../../components/dashboardCard/ContentCard";
import OverviewInfo from "../../components/dashboardCard/OverviewInfo";
import ForumCard from "../../components/dashboardCard/ForumCard";
import classes from "./Home.module.css";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className={classes.home}>
      <h1 className={classes.dashboardTitle}>Overview</h1>
      <OverviewInfo />
      <Chart />
      <div className={classes.cards}>
        <ForumCard />
        <ContentCard />
      </div>
    </div>
  );
};

export default Home;