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
} from "../contents/siteContents";

// reducer to get all the sites
export const sitesListReducer = (state = { sites: [] }, action) => {
  switch (action.type) {
    case SITES_LIST_REQUEST:
      return { sites: [] };
    case SITES_LIST_SUCCESS:
      return { sites: action.payload };
    case SITES_LIST_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const siteDetailReducer = (state = { site: {} }, action) => {
  switch (action.type) {
    case SITE_DETAIL_REQUEST:
      return { ...state };
    case SITE_DETAIL_SUCCESS:
      return { site: action.payload };
    case SITE_DETAIL_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
