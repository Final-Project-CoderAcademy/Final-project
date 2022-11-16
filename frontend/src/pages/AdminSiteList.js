import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { allSites, createSite, deleteSite } from "../actions/siteActions";
import { SITE_CREATE_RESET } from "../contents/siteContents";
import { useDispatch, useSelector } from "react-redux";
import leftArrowIcon from "../icons/left.svg";
import editIcon from "../icons/edit.png";
import deleteIcon from "../icons/delete.png";

const AdminSiteList = () => {
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
        <img
          src={leftArrowIcon}
          style={{ width: 28, height: 23 }}
          className="mt-5"
          variant="primary"
        />
      </Link>
      <div className="text-center">
        <h2 className="mb-4">SITE LIST</h2>
        {errorCreate && <p style={{ color: "red" }}>{errorCreate}</p>}
        {errorDelete && <p style={{ color: "red" }}>{errorDelete}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <Button variant="info" className="px-4" onClick={createSiteHandler}>
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
                    <img src={editIcon} style={{ width: 28, height: 23 }} />
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => deleteSitehandler(site._id)}
                >
                  <img src={deleteIcon} style={{ width: 28, height: 23 }} />
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
