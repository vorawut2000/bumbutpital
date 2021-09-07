import React from "react";
import Chart from "../../components/chart/Chart";
import ContentCard from "../../components/contentCard/ContentCard";
import ForumCard from "../../components/forumCard/ForumCard";
import OverviewInfo from "../../components/overviewInfo/OverviewInfo";
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
