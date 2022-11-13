import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLogInReducer,
  userRegisterReducer,
  getUserProfileReducer,
  updateUserProfileReducer,
  userListReducer,
  deleteUserReducer,
} from "./reducers/userReducers";
import {
  sitesListReducer,
  siteDetailReducer,
  siteCreateReducer,
  siteUpdateReducer,
  siteDeleteReducer,
  commentSiteAddReducer,
  commentSiteDeleteReducer,
} from "./reducers/siteReducer";
import {
  blogsListReducer,
  userBlogsReducer,
  blogDetailReducer,
  blogCreateReducer,
  blogUpdateReducer,
  blogDeleteReducer,
  commentBlogAddReducer,
  commentBlogDeleteReducer,
} from "./reducers/blogReducer";

const reducer = combineReducers({
  // login, signup
  userLogIn: userLogInReducer,
  userRegister: userRegisterReducer,
  // MY HOME
  userDetails: getUserProfileReducer,
  userUpdateDetails: updateUserProfileReducer,
  // Admin user list page
  userList: userListReducer,
  userDelete: deleteUserReducer,
  // Find your way page, Admin Site list page
  sitesList: sitesListReducer,
  // Site detail page
  siteDetails: siteDetailReducer,
  // Admin Site list page
  siteCreate: siteCreateReducer,
  siteUpdate: siteUpdateReducer,
  siteDelete: siteDeleteReducer,
  // Site detail page
  siteAddComment: commentSiteAddReducer,
  // blog article page
  blogAddComment: commentBlogAddReducer,
  //blog page
  blogsList: blogsListReducer,
  // blog article page
  blogDetails: blogDetailReducer,
  // MY HOME page
  blogCreate: blogCreateReducer,
  blogUpdate: blogUpdateReducer,
  blogDelete: blogDeleteReducer,
  userBlogs: userBlogsReducer,
  blogCommentDelete: commentBlogDeleteReducer,
  siteCommentDelete: commentSiteDeleteReducer,
});

// get the login user
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogIn: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
