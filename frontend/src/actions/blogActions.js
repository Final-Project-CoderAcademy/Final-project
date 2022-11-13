import {
  BLOGS_LIST_REQUEST,
  BLOGS_LIST_SUCCESS,
  BLOGS_LIST_FAIL,
  USER_BLOGS_REQUEST,
  USER_BLOGS_SUCCESS,
  USER_BLOGS_FAIL,
  BLOG_DETAIL_REQUEST,
  BLOG_DETAIL_SUCCESS,
  BLOG_DETAIL_FAIL,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_FAIL,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_SUCCESS,
  BLOG_UPDATE_FAIL,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_FAIL,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
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

// Get the user's all blogs
export const userAllBlogs = (userId) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_BLOGS_REQUEST });
    const {
      userLogIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/blogs/${userId}/all`, config);
    dispatch({ type: USER_BLOGS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_BLOGS_FAIL,
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
export const updateBlog = (blog) => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOG_UPDATE_REQUEST });
    const {
      userLogIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/api/blogs/${blog._id}`, blog, config);
    dispatch({ type: BLOG_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOG_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

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

// add comment to one blog
export const addCommentToOneBlog =
  (id, comment) => async (dispatch, getState) => {
    try {
      dispatch({ type: ADD_COMMENT_REQUEST });
      const {
        userLogIn: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `/api/blogs/${id}/comments`,
        comment,
        config
      );
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

// delete comment to one blog
export const deleteCommentToOneBlog =
  (id, commentId) => async (dispatch, getState) => {
    try {
      dispatch({ type: DELETE_COMMENT_REQUEST });
      const {
        userLogIn: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.delete(
        `/api/blogs/${id}/comments/${commentId}`,
        config
      );
      dispatch({ type: DELETE_COMMENT_SUCCESS });
    } catch (error) {
      dispatch({
        type: DELETE_COMMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
