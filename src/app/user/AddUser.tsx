import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "32px",
    },
    title: {
      fontSize: "34px",
      fontWeight: 600,
    },
    card: {
      margin: "20px 48px",
    },
    addUserTitle: {
      fontSize: "24px",
      fontWeight: 500,
    },
    paper: {
      alignItems: "center",
      margin: "20px 48px",
      width: "600px",
    },
    profileTitle: {
      margin: "8px 0px",
      fontSize: "20px",
      fontWeight: 600,
    },
    field: {
      display: "block",
      marginRight: "10px",
      marginTop: "10px",
      minWidth: "400px",
    },
    buttonGroup: {
      marginTop: "20px",
    },
  })
);

const AddUser = () => {
  const classes = useStyles();

  const [value, setValue] = useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className={classes.root}>
      <Typography gutterBottom className={classes.title}>
        Create User
      </Typography>
      <Card className={classes.card} elevation={0}>
        <Typography gutterBottom className={classes.addUserTitle}>
          Profile
        </Typography>
        <Paper className={classes.paper} elevation={0}>
          <Typography gutterBottom className={classes.profileTitle}>
            Username:
          </Typography>
          <TextField
            className={classes.field}
            fullWidth
            label="Username"
            variant="outlined"
            color="primary"
            size="medium"
            required
            id="Username"
          />
          <Typography gutterBottom className={classes.profileTitle}>
            First Name:
          </Typography>
          <TextField
            className={classes.field}
            fullWidth
            label="First Name"
            variant="outlined"
            color="primary"
            size="medium"
            required
            id="firstName"
          />
          <Typography gutterBottom className={classes.profileTitle}>
            Last Name:
          </Typography>
          <TextField
            className={classes.field}
            fullWidth
            label="Last Name"
            variant="outlined"
            color="primary"
            size="medium"
            required
            id="lastName"
          />
          <Typography gutterBottom className={classes.profileTitle}>
            Nickname:
          </Typography>
          <TextField
            className={classes.field}
            fullWidth
            label="Nickname"
            variant="outlined"
            color="primary"
            size="medium"
            required
            id="nickname"
          />
        </Paper>
        <Typography gutterBottom className={classes.addUserTitle}>
          Security
        </Typography>
        <Paper className={classes.paper} elevation={0}>
          <Typography gutterBottom className={classes.profileTitle}>
            User Type Role:
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="userType"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="basicUser"
                control={<Radio color="primary" />}
                label="Basic User"
              />
              <FormControlLabel
                value="SystemAdministrator"
                control={<Radio color="primary" />}
                label="System Administrator"
              />
              <FormControlLabel
                value="moph"
                control={<Radio color="primary" />}
                label="Ministry of Public Health Staff"
              />
            </RadioGroup>
          </FormControl>
          <Typography gutterBottom className={classes.profileTitle}>
            Password:
          </Typography>
          <TextField
            className={classes.field}
            type="password"
            fullWidth
            label="password"
            variant="outlined"
            color="primary"
            size="medium"
            required
            id="password"
          />
          <Typography gutterBottom className={classes.profileTitle}>
            Confirm password:
          </Typography>
          <TextField
            className={classes.field}
            type="password"
            fullWidth
            label="password"
            variant="outlined"
            color="primary"
            size="medium"
            required
            id="password"
          />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={classes.buttonGroup}
          >
            <Button color="secondary" size="large">
              Cancel
            </Button>
            <Button variant="contained" color="primary" size="large">
              Create
            </Button>
          </Grid>
        </Paper>
      </Card>
    </div>
  );
};

export default AddUser;
