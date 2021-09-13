import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Card, Grid, Link, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      fontSize: "32px",
      fontWeight: 600,
      padding: "32px 0px 10px 32px",
    },
    selectionItem: {
      color: "black",
      fontSize: "24px",
      fontWeight: 400,
      padding: "32px 0px 0px 32px",
      textDecoration: "none",
      "&:active, &:hover": {
        textDecoration: "underline",
        textDecorationThickness: "6px",
        textDecorationColor: "#FFB55E",
      },
    },
    paper: {
        padding: "32px"
    }
  })
);

const Forum = () => {
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
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item>
          <Link className={classes.selectionItem}>Lastest</Link>
        </Grid>
        <Grid item>
          <Link className={classes.selectionItem}>Pinned</Link>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item xs={11}>
          <Card variant="outlined" className={classes.paper}>Test</Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Forum;
