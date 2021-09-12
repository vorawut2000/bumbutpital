import React, { useState } from "react";
import classes from "./Management.module.css";
import { categoryData } from "../../dummyData";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import CategoryCard from "../../components/categoryCard/CategoryCard";

const ManageCategory = () => {
  const [data, setData] = useState(categoryData);

  const handleDelete = (id: any) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: "id",
      headerName: "No.",
      width: 100,
    },
    {
      field: "categories",
      headerName: "Categories",
      width: 200,
    },
    {
      field: "username",
      headerName: "Add by",
      width: 200,
    },
    {
      field: "role",
      headerName: "Role",
      width: 200,
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
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
              className={classes.manageListEdit}
            >
              Edit
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
      <div className={classes.manageTitle}>Categories Management</div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        autoPageSize={true}
        autoHeight
      />
      {/* change to backdrop */}
      {/* <Grid item xs={4}>
          <CategoryCard />
        </Grid> */}
    </div>
  );
};

export default ManageCategory;
