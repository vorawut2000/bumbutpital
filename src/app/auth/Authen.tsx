import React, { useState } from "react";
import Login from "../../components/authCard/Login";
import Register from "../../components/authCard/Register";
import classes from "./Authen.module.css";

const Authen = () => {
  const [isUILogin, setIsLogin] = useState(true);

  const onSwitch = () => {
    setIsLogin(!isUILogin);
  };

  let renderContent = isUILogin ? <Login onClick={onSwitch} /> : <Register onClick={onSwitch}/>;

  return (
    <div className={classes.authen}>
      <div className={classes.logoContainer}>
        <img src="/assets/images/BPTLogo.png" />
        <h1>BUMBUTPITAL</h1>
      </div>
      <div className={classes.authenCard}>{renderContent}</div>
    </div>
  );
};

export default Authen;
