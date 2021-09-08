import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import classes from "./Login.module.css";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 12,
    border: 0,
    color: "white",
    height: 52,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
});

const Login = () => {
  const style = useStyles();
  
  return (
    <div className={classes.login}>
      <h1 className={classes.loginTitle}>Admin Login</h1>
      <form className={classes.loginForm}>
        <div className={classes.loginItem}>
          <label>Username or Email</label>
          <input
            type="text"
            placeholder="Username"
            className={classes.loginInput}
          />
        </div>
        <div className={classes.loginItem}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            className={classes.loginInput}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={style.root}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
