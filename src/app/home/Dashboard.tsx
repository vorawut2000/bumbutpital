import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { People, PostAdd, Message, VideoLibrary } from "@material-ui/icons";
import OverviewInfo from "../../components/overviewInfo/OverviewInfo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "32px",
    },
    title: {
      fontSize: "32px",
      fontWeight: 600,
    },
    paper: {
      padding: "30px",
      margin: "auto",
      maxWidth: 500,
      backgroundColor: "#ecf2ff",
    },
  })
);

const Dashboard = () => {
  const classes = useStyles();

  const overviewItems = [
    {
      icon: <People />,
      number: 112,
      title: "total users",
    },
    {
      icon: <PostAdd />,
      number: 112,
      title: "content posts",
    },
    {
      icon: <Message />,
      number: 112,
      title: "forum messages",
    },
    {
      icon: <VideoLibrary />,
      number: 112,
      title: "videos",
    },
  ];

  return (
    <div className={classes.root}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        className={classes.title}
      >
        Overview
      </Typography>
      <Grid container direction="row" justifyContent="flex-start">
        {overviewItems.map((item) => (
          <OverviewInfo />
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
