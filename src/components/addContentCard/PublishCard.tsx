import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: "solid",
      borderWidth: "1px",
      borderColor: "#D1D1D1",
      borderRadius: "8px",
      marginBottom: "40px"
    },
    header: {
      backgroundColor: "#F8F8F8",
      padding: "16px",
    },
    title: {
      fontSize: "16px",
      fontWeight: 600,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 100,
    },
    content: {
      alignItems: "center",
    },
    action: {
      backgroundColor: "#F8F8F8",
      justifyContent: "space-between",
      padding: "25px",
    },
  })
);

const PublishCard = () => {
  const classes = useStyles();
  const [status, setStatus] = useState("");
  const [visibility, setVisibility] = useState("");
  const [publish, setPublish] = useState("");

  const handleStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(event.target.value as string);
  };
  const handleVisibilityChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setVisibility(event.target.value as string);
  };
  const handlePublishChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setPublish(event.target.value as string);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={<Typography className={classes.title}>Publish</Typography>}
        className={classes.header}
      />
      <CardContent className={classes.content}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant="body2" color="textSecondary" component="p">
            Status:
          </Typography>
          <FormControl
            variant="outlined"
            className={classes.formControl}
            size="small"
          >
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              id="status"
              onChange={handleStatusChange}
              value={status}
              label="Status"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Draft"}>Draft</MenuItem>
              <MenuItem value={"Sent"}>Sent</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant="body2" color="textSecondary" component="p">
            Visibility:
          </Typography>
          <FormControl
            variant="outlined"
            className={classes.formControl}
            size="small"
          >
            <InputLabel id="visibility">Visibility</InputLabel>
            <Select
              labelId="visibility"
              id="visibility"
              onChange={handleVisibilityChange}
              value={visibility}
              label="visibility"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Private"}>Private</MenuItem>
              <MenuItem value={"Public"}>Public</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant="body2" color="textSecondary" component="p">
            Publish:
          </Typography>
          <FormControl
            variant="outlined"
            className={classes.formControl}
            size="small"
          >
            <InputLabel id="publish">Publish</InputLabel>
            <Select
              labelId="publish"
              id="publish"
              onChange={handlePublishChange}
              value={publish}
              label="publish"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"immediately"}>immediately</MenuItem>
              <MenuItem value={1}>in 1 hour</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </CardContent>
      <CardActions className={classes.action}>
        <Button size="small" color="secondary">
          Move to Trash
        </Button>
        <Button variant="contained" size="small" color="primary">
          Post
        </Button>
      </CardActions>
    </Card>
  );
};

export default PublishCard;
