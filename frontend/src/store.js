import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLogInReducer, userRegisterReducer } from "./reducers/userReducers";
import {
  sitesListReducer,
  siteDetailReducer,
  siteCreateReducer,
  siteDeleteReducer,
} from "./reducers/siteReducer";
import { blogsListReducer } from "./reducers/blogReducer";

const reducer = combineReducers({
  userLogIn: userLogInReducer,
  userRegister: userRegisterReducer,
  sitesList: sitesListReducer,
  siteDetails: siteDetailReducer,
  siteCreate: siteCreateReducer,
  siteDelete: siteDeleteReducer,
  blogsList: blogsListReducer,
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
