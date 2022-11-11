import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { allSites, createSite, deleteSite } from "../actions/siteActions";
import { SITE_CREATE_RESET } from "../contents/siteContents";
import { useDispatch, useSelector } from "react-redux";
const AdminSiteList = () => {
  const dammySites = [
    { id: "10000000000", title: "hiking in tasmania", category: "Mountain" },
    { id: "20000000000", title: "surfing in goldcoast", category: "Beach" },
    { id: "30000000000", title: "the big banana", category: "Park" },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sitesList = useSelector((state) => state.sitesList);
  const { error, sites } = sitesList;
  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;
  const siteDelete = useSelector((state) => state.siteDelete);
  const { success: successDelete, error: errorDelete } = siteDelete;

  const siteCreate = useSelector((state) => state.siteCreate);
  const {
    error: errorCreate,
    success: successCreate,
    site: newSite,
  } = siteCreate;

  useEffect(() => {
    dispatch({ type: SITE_CREATE_RESET });
    if (!userInfo.isAdmin) {
      navigate("/login");
    }
    if (successCreate) {
      navigate(`/sites/${newSite._id}/edit`);
    } else {
      dispatch(allSites());
    }
    if (userInfo && userInfo.isAdmin) {
      dispatch(allSites());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo, successDelete, successCreate, newSite]);

  const createSiteHandler = () => {
    dispatch(createSite());
  };

  const deleteSitehandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteSite(id));
    }
  };

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
          <Button variant="info" className="px-4" onClick={createSiteHandler}>
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
          {sites.map((site) => (
            <tr key={site._id}>
              <td className="p-3">{site._id}</td>
              <td className="p-3">{site.name}</td>
              <td className="p-3">{site.category}</td>
              <td className="p-3">
                <Link to={`/sites/${site._id}/edit`}>
                  <Button variant="info" className="btn-sm">
                    <FontAwesomeIcon icon={solid("pen-to-square")} />
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => deleteSitehandler(site._id)}
                >
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
