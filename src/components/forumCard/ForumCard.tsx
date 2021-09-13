import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      padding: "24px",
      justifyContent: "space-between",
    },
    question: {
      fontSize: "24px",
      fontWeight: 600,
    },
    detail: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    questionDetail: {
      fontSize: "16px",
      fontWeight: 300,
    },
    user: {
      display: "flex",
      alignItems: "center",
      paddingTop: "32px",
    },

    action: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    messageNumber: {
      backgroundColor: "#63EA89",
      width: "60px",
      height: "60px",
    },
    buttonAnswer: {
      padding: "10px",
      margin: "8px",
      background: "#3CA75A",
      color: "white",
    },
    buttonPinned: {
      padding: "10px",
      margin: "8px",
      background: "#6367EA",
      color: "white",
    },
    buttonUrgent: {
      padding: "10px",
      margin: "8px",
      background: "#EA6363",
      color: "white",
    },
    answer: {
      fontSize: "14px",
      fontWeight: 600,
    },
  })
);

const ForumCard = () => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <div className={classes.detail}>
        <CardContent className={classes.content}>
          <Typography
            className={classes.question}
            variant="h2"
            component="h1"
            gutterBottom
          >
            Q: I want you to help.
          </Typography>
          <Typography
            className={classes.questionDetail}
            component="h5"
            variant="h5"
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <div className={classes.user}>
            <Typography variant="subtitle1" color="textSecondary">
              User: Wisa Asked on 30 April 2021
            </Typography>
          </div>
        </CardContent>
      </div>
      <CardActions className={classes.action}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Avatar className={classes.messageNumber}>1</Avatar>
          <Typography
            variant="body1"
            component="h5"
            className={classes.answer}
            gutterBottom
          >
            Answer
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Button variant="contained" className={classes.buttonAnswer}>
            Answer
          </Button>
          <Button variant="contained" className={classes.buttonPinned}>
            Pin
          </Button>
          <Button variant="contained" className={classes.buttonUrgent}>
            Urgent
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ForumCard;
