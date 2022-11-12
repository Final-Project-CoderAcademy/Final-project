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
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
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

// reducer to get one site detail
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

// reducer to create one site
export const siteCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SITE_CREATE_REQUEST:
      return {};
    case SITE_CREATE_SUCCESS:
      return { success: true, site: action.payload };
    case SITE_CREATE_FAIL:
      return { error: action.payload };
    case SITE_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

// reducer to update one site
export const siteUpdateReducer = (state = { site: {} }, action) => {
  switch (action.type) {
    case SITE_UPDATE_REQUEST:
      return { loading: true };
    case SITE_UPDATE_SUCCESS:
      return { success: true, site: action.payload };
    case SITE_UPDATE_FAIL:
      return { error: action.payload };
    case SITE_UPDATE_RESET:
      return { site: {} };
    default:
      return state;
  }
};

// reducer to delete one site
export const siteDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SITE_DELETE_REQUEST:
      return {};
    case SITE_DELETE_SUCCESS:
      return { success: true };
    case SITE_DELETE_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};


// reducer to add comment for a site
export const commentAddReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMMENT_REQUEST:
      return {};
    case ADD_COMMENT_SUCCESS:
      return { success: true };
    case ADD_COMMENT_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};