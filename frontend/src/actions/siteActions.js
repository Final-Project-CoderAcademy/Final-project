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
  SITE_CREATE_RESET,
  SITE_UPDATE_REQUEST,
  SITE_UPDATE_SUCCESS,
  SITE_UPDATE_FAIL,
  SITE_UPDATE_RESET,
  SITE_DELETE_REQUEST,
  SITE_DELETE_SUCCESS,
  SITE_DELETE_FAIL,
} from "../contents/listContents";
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
