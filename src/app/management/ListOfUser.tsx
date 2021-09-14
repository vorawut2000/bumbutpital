import React from "react";
import { GET_ALL_USERS } from "../../Graphql/Queries";
import { useQuery } from "@apollo/client";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: "auto",
      padding: "30px",
    },
    addTitle: {
      fontSize: "32px",
      fontWeight: 600,
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    manageListDetail: {
      padding: "5px 10px",
      color: "#6367ea",
      cursor: "pointer",
      marginRight: "20px",
      textDecoration: "none",
      fontSize: "16px",
    },
    manageListDelete: {
      padding: "5px 10px",
      color: "#ea6363",
      cursor: "pointer",
      marginRight: "20px",
      textDecoration: "none",
      fontSize: "16px",
    },
    titleButton: {
      background: "#6367EA",
      borderRadius: 5,
      border: 0,
      color: "white",
      height: 36,
      float: "right",
    },
  })
);

const ListOfUsers = () => {
  const classes = useStyles();
  const history = useHistory();
  const { data } = useQuery(GET_ALL_USERS);

  const submitHandler = () => {
    history.push("/user/createUser");
  };

  return (
    <div className={classes.root}>
      <Typography
        className={classes.addTitle}
        gutterBottom
        variant="h1"
        component="h1"
      >
        User Management
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.titleButton}
          onClick={submitHandler}
        >
          Add User
        </Button>
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align="left">Username</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Surname</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.getAllUsers.map((user: any) => (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell align="left">{user.username}</TableCell>
                  <TableCell align="left">{user.name}</TableCell>
                  <TableCell align="left">{user.surname}</TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">{user.phoneNumber}</TableCell>
                  <TableCell align="left">
                    <Link
                      to={"/user/" + user.id}
                      className={classes.manageListDetail}
                    >
                      View Detail
                    </Link>
                    <Link
                      to={"/user/edit/" + user.id}
                      className={classes.manageListDelete}
                      // onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListOfUsers;
