import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Container, Row, Col, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const AdminUserList = () => {
  const dammyUsers = [
    {
      id: "10000000000",
      username: "ABC",
      email: "user1@example.com",
      admin: false,
    },
    {
      id: "20000000000",
      username: "DEF",
      email: "user2@example.com",
      admin: true,
    },
    {
      id: "30000000000",
      username: "GHI",
      email: "user3@example.com",
      admin: false,
    },
  ];

  return (
    <Container className="justify-content-md-center">
      <Link to="/">
        <FontAwesomeIcon
          icon={solid("arrow-left")}
          style={{ width: 28, height: 23, color: "black" }}
          className="mt-5"
          variant="primary"
        />
      </Link>
      <h2 className="mb-4 text-center">USER LIST</h2>

      <Table
        striped
        bordered
        hover
        responsive
        className="table-sm text-center my-5 text-nowrap"
      >
        <thead>
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">USERNAME</th>
            <th className="p-2">EMAIL</th>
            <th className="p-2">ADMIN</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {dammyUsers.map(({ id, username, email, admin }) => (
            <tr key={id}>
              <td className="p-2">{id}</td>
              <td className="p-2">{username}</td>
              <td className="p-2">{email}</td>
              {admin ? (
                <td className="p-2">
                  <FontAwesomeIcon
                    icon={solid("check")}
                    style={{ color: "green" }}
                  />
                </td>
              ) : (
                <td className="p-2">
                  <FontAwesomeIcon
                    icon={solid("xmark")}
                    style={{ color: "red" }}
                  />
                </td>
              )}
              {admin ? (
                <td className="p-2">Admin</td>
              ) : (
                <td className="p-2">
                  <Button variant="danger" className="btn-sm">
                    <FontAwesomeIcon icon={solid("trash-can")} />
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminUserList;
