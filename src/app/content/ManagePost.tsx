import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { contentData } from "../../dummyData";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import classes from "./ManagePost.module.css";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "#6367EA",
    borderRadius: 5,
    border: 0,
    color: "white",
    height: 36,
    float: "right",
  },
});

//have to change type!!!!
const ManagePost = () => {
  const style = useStyles();
  const history = useHistory();
  const [data, setData] = useState(contentData);

  const handleDelete = (id: any) => {
    setData(data.filter((item) => item.id !== id));
  };

  const submitHandler = () => {
    history.push("/home");
  };

  const columns = [
    { field: "id", headerName: "No.", width: 190 },
    {
      field: "title",
      headerName: "Title",
      width: 300,
    },
    { field: "username", headerName: "Author", width: 300 },
    {
      field: "categories",
      headerName: "Categories",
      width: 300,
    },
    {
      field: "depression",
      headerName: "Depression Severity",
      width: 300,
    },
    {
      field: "date",
      headerName: "Date",
      width: 300,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params: any) => {
        return (
          <>
            <Link
              to={"/posts/" + params.row.id}
              className={classes.userListEdit}
            >
              Edit
            </Link>
            <Link
              to={"/posts/" + params.row.id}
              className={classes.userListDelete}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </Link>
            <Link
              to={"/posts/" + params.row.id}
              className={classes.userListPublish}
            >
              Publish
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className={classes.userList}>
      <div className={classes.userTitle}>
        Manage Post
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={style.root}
          onClick={submitHandler}
        >
          Add Post
        </Button>
      </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        autoPageSize={true}
        autoHeight
      />
    </div>
  );
};

export default ManagePost;
