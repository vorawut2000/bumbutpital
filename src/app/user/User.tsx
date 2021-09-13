import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      fontSize: "32px",
      fontWeight: 600,
      padding: "32px 32px 10px 32px",
    },
  })
);

const User = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        className={classes.title}
      >
        Forum
      </Typography>
    </div>
  );
};

export default User;
