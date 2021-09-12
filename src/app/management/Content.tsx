import React from "react";
import classes from "./Management.module.css";
import { contentData } from "../../dummyData";
import { Button, makeStyles } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

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
const ManageContent = () => {
  const history = useHistory();
  const style = useStyles();
  const [data, setData] = useState(contentData);

  const handleDelete = (id: any) => {
    setData(data.filter((item) => item.id !== id));
  };

  const submitHandler = () => {
    history.push("/content/createContent");
  };

  const columns = [
    {
      field: "id",
      headerName: "No.",
      width: 190,
    },
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
              to={"/contents/" + params.row.id}
              className={classes.manageListEdit}
            >
              Edit
            </Link>
            <Link
              to={"/contents/" + params.row.id}
              className={classes.manageListDelete}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </Link>
            <Link
              to={"/contents/" + params.row.id}
              className={classes.manageListPublish}
            >
              Publish
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className={classes.manageList}>
      <div className={classes.manageTitle}>
        Content Management
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={style.root}
          onClick={submitHandler}
        >
          Add Content
        </Button>
      </div>
      <DataGrid
        autoHeight
        autoPageSize={true}
        checkboxSelection
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
        rows={data}
      />
    </div>
  );
};

export default ManageContent;
