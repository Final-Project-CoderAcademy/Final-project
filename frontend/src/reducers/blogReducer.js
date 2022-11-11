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

// reducer to get all the blogs
export const blogsListReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case BLOGS_LIST_REQUEST:
      return { blogs: [] };
    case BLOGS_LIST_SUCCESS:
      return { blogs: action.payload };
    case BLOGS_LIST_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
