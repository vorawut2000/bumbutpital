import React from "react";
import classes from "./CategoryCard.module.css";

const CategoryCard = () => {
  return (
    <div className={classes.categoryCard}>
      <div className={classes.categoryTitle}>Add Categories</div>
      <input
        className={classes.replyInput}
        type="text"
        placeholder="Reply..."
      />
    </div>
  );
};

export default CategoryCard;
