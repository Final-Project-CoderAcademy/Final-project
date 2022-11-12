import {
  BLOGS_LIST_REQUEST,
  BLOGS_LIST_SUCCESS,
  BLOGS_LIST_FAIL,
  BLOG_DETAIL_REQUEST,
  BLOG_DETAIL_SUCCESS,
  BLOG_DETAIL_FAIL,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_FAIL,
  BLOG_CREATE_RESET,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_SUCCESS,
  BLOG_UPDATE_FAIL,
  BLOG_UPDATE_RESET,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_FAIL,
} from "../contents/blogContents";
import axios from "axios";

// Get all the blogs
export const allBlogs = () => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOGS_LIST_REQUEST });
    const {
      userLogIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("/api/blogs", config);
    dispatch({ type: BLOGS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOGS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Get one blog article
export const blogDetail = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOG_DETAIL_REQUEST });
    const {
      userLogIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/blogs/${id}`, config);
    dispatch({ type: BLOG_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOG_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Create blog article
export const createBlog = () => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOG_CREATE_REQUEST });
    const {
      userLogIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`/api/blogs`, {}, config);
    dispatch({ type: BLOG_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOG_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Update blog article

// Delete blog article
export const deleteBlog = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOG_DELETE_REQUEST });
    const {
      userLogIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`/api/blogs/${id}`, config);
    dispatch({ type: BLOG_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: BLOG_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
