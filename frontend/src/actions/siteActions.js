import {
  SITES_LIST_REQUEST,
  SITES_LIST_SUCCESS,
  SITES_LIST_FAIL,
  SITE_DETAIL_REQUEST,
  SITE_DETAIL_SUCCESS,
  SITE_DETAIL_FAIL,
  SITE_CREATE_REQUEST,
  SITE_CREATE_SUCCESS,
  SITE_CREATE_FAIL,
  SITE_UPDATE_REQUEST,
  SITE_UPDATE_SUCCESS,
  SITE_UPDATE_FAIL,
  SITE_DELETE_REQUEST,
  SITE_DELETE_SUCCESS,
  SITE_DELETE_FAIL,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
} from "../contents/siteContents";
import axios from "axios";

// Get all the sites
export const allSites = () => async (dispatch) => {
  try {
    dispatch({ type: SITES_LIST_REQUEST });
    const { data } = await axios.get("/api/sites");
    dispatch({ type: SITES_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SITES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Get one site detail
export const siteDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: SITE_DETAIL_REQUEST });
    const { data } = await axios.get(`/api/sites/${id}`);
    dispatch({ type: SITE_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SITE_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Create one site
export const createSite = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SITE_CREATE_REQUEST });
    const {
      userLogIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      },
    };
    const { data } = await axios.post(`/api/sites`, {}, config);
    dispatch({ type: SITE_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SITE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Update one site
export const updateSite = (site) => async (dispatch, getState) => {
  try {
    dispatch({ type: SITE_UPDATE_REQUEST });
    const {
      userLogIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/api/sites/${site._id}`, site, config);
    dispatch({ type: SITE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SITE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Delete one site
export const deleteSite = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: SITE_DELETE_REQUEST });
    const {
      userLogIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`/api/sites/${id}`, config);
    dispatch({ type: SITE_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: SITE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// add comment to one site
export const addCommentToOneSite = (id, comment) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_COMMENT_REQUEST });
    const {
      userLogIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      },
    };
    const {data} = await axios.post(`/api/sites/${id}/comments`, comment, config);
    dispatch({ type: ADD_COMMENT_SUCCESS });
  } catch (error) {
    dispatch({
      type: ADD_COMMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};