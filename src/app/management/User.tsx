import React, { useState } from "react";
import classes from "./Management.module.css";
import { userData } from "../../dummyData";
import { Button, makeStyles } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useHistory } from "react-router-dom";

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

const ManageUser = () => {
  const history = useHistory();
  const style = useStyles();
  const [data, setData] = useState(userData);

  const handleDelete = (id: any) => {
    setData(data.filter((item) => item.id !== id));
  };

  const submitHandler = () => {
    history.push("/home");
  };

  const columns = [
    {
      field: "id",
      headerName: "No.",
      width: 190,
    },
    {
      field: "name",
      headerName: "Name",
      width: 300,
    },
    {
      field: "role",
      headerName: "Role",
      width: 300,
    },
    {
      field: "email",
      headerName: "Email",
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
              className={classes.manageListDetail}
            >
              View Detail
            </Link>
            <Link
              to={"/posts/" + params.row.id}
              className={classes.manageListDelete}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className={classes.manageList}>
      <div className={classes.manageTitle}>
        User Management
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={style.root}
          onClick={submitHandler}
        >
          Add User
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

export default ManageUser;
