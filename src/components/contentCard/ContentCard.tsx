import React from "react";
import classes from "./ContentCard.module.css";

//have to deconstruct
const ContentCard = () => {
  return (
    <div className={classes.contentCard}>
      <div className={classes.contentCardTitle}>Content Card</div>
      <ul className={classes.contentCardList}>
        <li className={classes.contentCardListItem}>
          <img
            src="https://icon-library.com/images/username-icon/username-icon-18.jpg"
            alt=""
            className={classes.avatar}
          />
          <div className={classes.contentDetail}>
            <span className={classes.contentDetailTitle}>Content About depression</span>
            <span className={classes.contentDetailAdmin}>Content About Depression</span>
          </div>
          <span className={classes.contentDate}>DATE</span>
        </li>
        <hr/>
        <li className={classes.contentCardListItem}>
          <img
            src="https://icon-library.com/images/username-icon/username-icon-18.jpg"
            alt=""
            className={classes.avatar}
          />
          <div className={classes.contentDetail}>
            <span className={classes.contentDetailTitle}>Content About depression</span>
            <span className={classes.contentDetailAdmin}>Content About Depression</span>
          </div>
          <span className={classes.contentDate}>DATE</span>
        </li>

        
      </ul>
    </div>
  );
};

export default ContentCard;
