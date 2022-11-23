import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { listUsers, deleteUser } from "../actions/userActions";

const AdminUserList = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  //get all users state from store
  const userList = useSelector((state) => state.userList);
  const { error, users } = userList;
  //get login user state from store
  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;
  // get user delete state from store
  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  // if the user is admin, get all the users, otherwise navigate to the login page
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo, successDelete]);

  //delete common user
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <Container className="justify-content-md-center">
      <Link to="/">
        <i
          data-id="back"
          className="fa-solid fa-arrow-left mt-5"
          style={{ color: "black" }}
        ></i>
      </Link>
      <h2 className="mb-4 text-center">USER LIST</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <Table
          striped
          bordered
          hover
          responsive
          className=" table-sm text-center my-5 text-nowrap"
        >
          <thead>
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">USERNAME</th>
              <th className="p-3">EMAIL</th>
              <th className="p-3">ADMIN</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id}>
                <td className="p-3">{user._id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3" id="userEmail">
                  {user.email}
                </td>
                {user.isAdmin ? (
                  <td className="p-3">
                    <i
                      className="fa-solid fa-check "
                      style={{ color: "green" }}
                    ></i>
                  </td>
                ) : (
                  <td className="p-3">
                    <i
                      className="fa-solid fa-xmark"
                      style={{ color: "red" }}
                    ></i>
                  </td>
                )}
                {user.isAdmin ? (
                  <td className="p-3">Admin</td>
                ) : (
                  <td className="p-3">
                    <Button
                      id="userdelete"
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(user._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default AdminUserList;
