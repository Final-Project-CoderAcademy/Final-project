import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const AdminSiteList = () => {
  const dammySites = [
    { id: "10000000000", title: "hiking in tasmania", category: "Mountain" },
    { id: "20000000000", title: "surfing in goldcoast", category: "Beach" },
    { id: "30000000000", title: "the big banana", category: "Park" },
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
      <div className="text-center">
        <h2 className="mb-4">SITE LIST</h2>
        <Link to="/sites/:id/edit">
          <Button variant="info" className="px-4">
            CREATE A SITE
          </Button>
        </Link>
      </div>

      <Table
        striped
        bordered
        hover
        responsive
        className="table-sm text-center my-5 text-nowrap"
      >
        <thead>
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">TITLE</th>
            <th className="p-3">CATEGORY</th>
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {dammySites.map(({ id, title, category }) => (
            <tr key={id}>
              <td className="p-3">{id}</td>
              <td className="p-3">{title}</td>
              <td className="p-3">{category}</td>
              <td className="p-3">
                <Link to="/sites/:id/edit">
                  <Button variant="info" className="btn-sm">
                    <FontAwesomeIcon icon={solid("pen-to-square")} />
                  </Button>
                </Link>
                <Button variant="danger" className="btn-sm">
                  <FontAwesomeIcon icon={solid("trash-can")} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminSiteList;
