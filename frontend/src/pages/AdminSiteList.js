import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { allSites, createSite, deleteSite } from "../actions/siteActions";
import { SITE_CREATE_RESET } from "../contents/siteContents";
import { useDispatch, useSelector } from "react-redux";

const AdminSiteList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // get sites list state from store
  const sitesList = useSelector((state) => state.sitesList);
  const { error, sites } = sitesList;
  //get login user state from store
  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;
  // get site delete state from store
  const siteDelete = useSelector((state) => state.siteDelete);
  const { success: successDelete, error: errorDelete } = siteDelete;
  // get site create state from store
  const siteCreate = useSelector((state) => state.siteCreate);
  const {
    error: errorCreate,
    success: successCreate,
    site: newSite,
  } = siteCreate;

  useEffect(() => {
    dispatch({ type: SITE_CREATE_RESET });
    // if user is admin, get all the sites, otherwise navigate to login page
    if (userInfo && userInfo.isAdmin) {
      dispatch(allSites());
    } else {
      navigate("/login");
    }
    // if site created successfully, then navigate to edit page, but if not, take the user to list page
    if (successCreate) {
      navigate(`/sites/${newSite._id}/edit`);
    } else {
      dispatch(allSites());
    }
  }, [dispatch, navigate, userInfo, successDelete, successCreate, newSite]);

  // create site action
  const createSiteHandler = () => {
    dispatch(createSite());
  };

  //delete site action
  const deleteSitehandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteSite(id));
    }
  };

  return (
    <Container className="justify-content-md-center">
      <Link to="/">
        <i
          className="fa-solid fa-arrow-left mt-5"
          style={{ color: "black" }}
          data-id="back"
        ></i>
      </Link>
      <div className="text-center">
        <h2 className="mb-4">SITE LIST</h2>
        {errorCreate && <p style={{ color: "red" }}>{errorCreate}</p>}
        {errorDelete && <p style={{ color: "red" }}>{errorDelete}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <Button
          id="createSiteButton"
          variant="info"
          className="px-4"
          onClick={createSiteHandler}
        >
          CREATE A SITE
        </Button>
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
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>
                </Link>
                <Button
                  id="deleteSiteButton"
                  variant="danger"
                  className="btn-sm"
                  onClick={() => deleteSitehandler(site._id)}
                >
                  <i className="fa-solid fa-trash"></i>
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
