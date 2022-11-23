function cov_86alnol67() {
  var path = "/Users/yukatoshima/Desktop/Final-assignment/Final-project/frontend/src/store.js";
  var hash = "57228089d280822496b2b04d3449340bf10c5057";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yukatoshima/Desktop/Final-assignment/Final-project/frontend/src/store.js",
    statementMap: {
      "0": {
        start: {
          line: 31,
          column: 16
        },
        end: {
          line: 63,
          column: 2
        }
      },
      "1": {
        start: {
          line: 66,
          column: 28
        },
        end: {
          line: 68,
          column: 8
        }
      },
      "2": {
        start: {
          line: 70,
          column: 21
        },
        end: {
          line: 72,
          column: 1
        }
      },
      "3": {
        start: {
          line: 74,
          column: 19
        },
        end: {
          line: 74,
          column: 26
        }
      },
      "4": {
        start: {
          line: 76,
          column: 14
        },
        end: {
          line: 80,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 66,
            column: 28
          },
          end: {
            line: 68,
            column: 8
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 67,
            column: 48
          }
        }, {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 68,
            column: 8
          }
        }],
        line: 66
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {},
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "57228089d280822496b2b04d3449340bf10c5057"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_86alnol67 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_86alnol67();
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLogInReducer, userRegisterReducer, getUserProfileReducer, updateUserProfileReducer, userListReducer, deleteUserReducer } from "./reducers/userReducers";
import { sitesListReducer, siteDetailReducer, siteCreateReducer, siteUpdateReducer, siteDeleteReducer, commentSiteAddReducer, commentSiteDeleteReducer } from "./reducers/siteReducer";
import { blogsListReducer, userBlogsReducer, blogDetailReducer, blogCreateReducer, blogDeleteReducer, commentBlogAddReducer, commentBlogDeleteReducer } from "./reducers/blogReducer";
const reducer = (cov_86alnol67().s[0]++, combineReducers({
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
  // blog article page, blog Form
  blogDetails: blogDetailReducer,
  // MY HOME page
  blogCreate: blogCreateReducer,
  blogDelete: blogDeleteReducer,
  userBlogs: userBlogsReducer,
  blogCommentDelete: commentBlogDeleteReducer,
  siteCommentDelete: commentSiteDeleteReducer
}));

// get the login user
const userInfoFromStorage = (cov_86alnol67().s[1]++, localStorage.getItem("userInfo") ? (cov_86alnol67().b[0][0]++, JSON.parse(localStorage.getItem("userInfo"))) : (cov_86alnol67().b[0][1]++, null));
const initialState = (cov_86alnol67().s[2]++, {
  userLogIn: {
    userInfo: userInfoFromStorage
  }
});
const middleware = (cov_86alnol67().s[3]++, [thunk]);
const store = (cov_86alnol67().s[4]++, createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))));
export default store;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImNvbWJpbmVSZWR1Y2VycyIsInRodW5rIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInVzZXJMb2dJblJlZHVjZXIiLCJ1c2VyUmVnaXN0ZXJSZWR1Y2VyIiwiZ2V0VXNlclByb2ZpbGVSZWR1Y2VyIiwidXBkYXRlVXNlclByb2ZpbGVSZWR1Y2VyIiwidXNlckxpc3RSZWR1Y2VyIiwiZGVsZXRlVXNlclJlZHVjZXIiLCJzaXRlc0xpc3RSZWR1Y2VyIiwic2l0ZURldGFpbFJlZHVjZXIiLCJzaXRlQ3JlYXRlUmVkdWNlciIsInNpdGVVcGRhdGVSZWR1Y2VyIiwic2l0ZURlbGV0ZVJlZHVjZXIiLCJjb21tZW50U2l0ZUFkZFJlZHVjZXIiLCJjb21tZW50U2l0ZURlbGV0ZVJlZHVjZXIiLCJibG9nc0xpc3RSZWR1Y2VyIiwidXNlckJsb2dzUmVkdWNlciIsImJsb2dEZXRhaWxSZWR1Y2VyIiwiYmxvZ0NyZWF0ZVJlZHVjZXIiLCJibG9nRGVsZXRlUmVkdWNlciIsImNvbW1lbnRCbG9nQWRkUmVkdWNlciIsImNvbW1lbnRCbG9nRGVsZXRlUmVkdWNlciIsInJlZHVjZXIiLCJ1c2VyTG9nSW4iLCJ1c2VyUmVnaXN0ZXIiLCJ1c2VyRGV0YWlscyIsInVzZXJVcGRhdGVEZXRhaWxzIiwidXNlckxpc3QiLCJ1c2VyRGVsZXRlIiwic2l0ZXNMaXN0Iiwic2l0ZURldGFpbHMiLCJzaXRlQ3JlYXRlIiwic2l0ZVVwZGF0ZSIsInNpdGVEZWxldGUiLCJzaXRlQWRkQ29tbWVudCIsImJsb2dBZGRDb21tZW50IiwiYmxvZ3NMaXN0IiwiYmxvZ0RldGFpbHMiLCJibG9nQ3JlYXRlIiwiYmxvZ0RlbGV0ZSIsInVzZXJCbG9ncyIsImJsb2dDb21tZW50RGVsZXRlIiwic2l0ZUNvbW1lbnREZWxldGUiLCJ1c2VySW5mb0Zyb21TdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImluaXRpYWxTdGF0ZSIsInVzZXJJbmZvIiwibWlkZGxld2FyZSIsInN0b3JlIl0sInNvdXJjZXMiOlsic3RvcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xuaW1wb3J0IHtcbiAgdXNlckxvZ0luUmVkdWNlcixcbiAgdXNlclJlZ2lzdGVyUmVkdWNlcixcbiAgZ2V0VXNlclByb2ZpbGVSZWR1Y2VyLFxuICB1cGRhdGVVc2VyUHJvZmlsZVJlZHVjZXIsXG4gIHVzZXJMaXN0UmVkdWNlcixcbiAgZGVsZXRlVXNlclJlZHVjZXIsXG59IGZyb20gXCIuL3JlZHVjZXJzL3VzZXJSZWR1Y2Vyc1wiO1xuaW1wb3J0IHtcbiAgc2l0ZXNMaXN0UmVkdWNlcixcbiAgc2l0ZURldGFpbFJlZHVjZXIsXG4gIHNpdGVDcmVhdGVSZWR1Y2VyLFxuICBzaXRlVXBkYXRlUmVkdWNlcixcbiAgc2l0ZURlbGV0ZVJlZHVjZXIsXG4gIGNvbW1lbnRTaXRlQWRkUmVkdWNlcixcbiAgY29tbWVudFNpdGVEZWxldGVSZWR1Y2VyLFxufSBmcm9tIFwiLi9yZWR1Y2Vycy9zaXRlUmVkdWNlclwiO1xuaW1wb3J0IHtcbiAgYmxvZ3NMaXN0UmVkdWNlcixcbiAgdXNlckJsb2dzUmVkdWNlcixcbiAgYmxvZ0RldGFpbFJlZHVjZXIsXG4gIGJsb2dDcmVhdGVSZWR1Y2VyLFxuICBibG9nRGVsZXRlUmVkdWNlcixcbiAgY29tbWVudEJsb2dBZGRSZWR1Y2VyLFxuICBjb21tZW50QmxvZ0RlbGV0ZVJlZHVjZXIsXG59IGZyb20gXCIuL3JlZHVjZXJzL2Jsb2dSZWR1Y2VyXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAvLyBsb2dpbiwgc2lnbnVwXG4gIHVzZXJMb2dJbjogdXNlckxvZ0luUmVkdWNlcixcbiAgdXNlclJlZ2lzdGVyOiB1c2VyUmVnaXN0ZXJSZWR1Y2VyLFxuICAvLyBNWSBIT01FXG4gIHVzZXJEZXRhaWxzOiBnZXRVc2VyUHJvZmlsZVJlZHVjZXIsXG4gIHVzZXJVcGRhdGVEZXRhaWxzOiB1cGRhdGVVc2VyUHJvZmlsZVJlZHVjZXIsXG4gIC8vIEFkbWluIHVzZXIgbGlzdCBwYWdlXG4gIHVzZXJMaXN0OiB1c2VyTGlzdFJlZHVjZXIsXG4gIHVzZXJEZWxldGU6IGRlbGV0ZVVzZXJSZWR1Y2VyLFxuICAvLyBGaW5kIHlvdXIgd2F5IHBhZ2UsIEFkbWluIFNpdGUgbGlzdCBwYWdlXG4gIHNpdGVzTGlzdDogc2l0ZXNMaXN0UmVkdWNlcixcbiAgLy8gU2l0ZSBkZXRhaWwgcGFnZVxuICBzaXRlRGV0YWlsczogc2l0ZURldGFpbFJlZHVjZXIsXG4gIC8vIEFkbWluIFNpdGUgbGlzdCBwYWdlXG4gIHNpdGVDcmVhdGU6IHNpdGVDcmVhdGVSZWR1Y2VyLFxuICBzaXRlVXBkYXRlOiBzaXRlVXBkYXRlUmVkdWNlcixcbiAgc2l0ZURlbGV0ZTogc2l0ZURlbGV0ZVJlZHVjZXIsXG4gIC8vIFNpdGUgZGV0YWlsIHBhZ2VcbiAgc2l0ZUFkZENvbW1lbnQ6IGNvbW1lbnRTaXRlQWRkUmVkdWNlcixcbiAgLy8gYmxvZyBhcnRpY2xlIHBhZ2VcbiAgYmxvZ0FkZENvbW1lbnQ6IGNvbW1lbnRCbG9nQWRkUmVkdWNlcixcbiAgLy9ibG9nIHBhZ2VcbiAgYmxvZ3NMaXN0OiBibG9nc0xpc3RSZWR1Y2VyLFxuICAvLyBibG9nIGFydGljbGUgcGFnZSwgYmxvZyBGb3JtXG4gIGJsb2dEZXRhaWxzOiBibG9nRGV0YWlsUmVkdWNlcixcbiAgLy8gTVkgSE9NRSBwYWdlXG4gIGJsb2dDcmVhdGU6IGJsb2dDcmVhdGVSZWR1Y2VyLFxuICBibG9nRGVsZXRlOiBibG9nRGVsZXRlUmVkdWNlcixcbiAgdXNlckJsb2dzOiB1c2VyQmxvZ3NSZWR1Y2VyLFxuICBibG9nQ29tbWVudERlbGV0ZTogY29tbWVudEJsb2dEZWxldGVSZWR1Y2VyLFxuICBzaXRlQ29tbWVudERlbGV0ZTogY29tbWVudFNpdGVEZWxldGVSZWR1Y2VyLFxufSk7XG5cbi8vIGdldCB0aGUgbG9naW4gdXNlclxuY29uc3QgdXNlckluZm9Gcm9tU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckluZm9cIilcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckluZm9cIikpXG4gIDogbnVsbDtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyTG9nSW46IHsgdXNlckluZm86IHVzZXJJbmZvRnJvbVN0b3JhZ2UgfSxcbn07XG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtdO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICByZWR1Y2VyLFxuICBpbml0aWFsU3RhdGUsXG4gIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7QUFBQTtBQUFBO0FBZlosU0FBU0EsV0FBVyxFQUFFQyxlQUFlLEVBQUVDLGVBQWUsUUFBUSxPQUFPO0FBQ3JFLE9BQU9DLEtBQUssTUFBTSxhQUFhO0FBQy9CLFNBQVNDLG1CQUFtQixRQUFRLDBCQUEwQjtBQUM5RCxTQUNFQyxnQkFBZ0IsRUFDaEJDLG1CQUFtQixFQUNuQkMscUJBQXFCLEVBQ3JCQyx3QkFBd0IsRUFDeEJDLGVBQWUsRUFDZkMsaUJBQWlCLFFBQ1oseUJBQXlCO0FBQ2hDLFNBQ0VDLGdCQUFnQixFQUNoQkMsaUJBQWlCLEVBQ2pCQyxpQkFBaUIsRUFDakJDLGlCQUFpQixFQUNqQkMsaUJBQWlCLEVBQ2pCQyxxQkFBcUIsRUFDckJDLHdCQUF3QixRQUNuQix3QkFBd0I7QUFDL0IsU0FDRUMsZ0JBQWdCLEVBQ2hCQyxnQkFBZ0IsRUFDaEJDLGlCQUFpQixFQUNqQkMsaUJBQWlCLEVBQ2pCQyxpQkFBaUIsRUFDakJDLHFCQUFxQixFQUNyQkMsd0JBQXdCLFFBQ25CLHdCQUF3QjtBQUUvQixNQUFNQyxPQUFPLDRCQUFHdkIsZUFBZSxDQUFDO0VBQzlCO0VBQ0F3QixTQUFTLEVBQUVyQixnQkFBZ0I7RUFDM0JzQixZQUFZLEVBQUVyQixtQkFBbUI7RUFDakM7RUFDQXNCLFdBQVcsRUFBRXJCLHFCQUFxQjtFQUNsQ3NCLGlCQUFpQixFQUFFckIsd0JBQXdCO0VBQzNDO0VBQ0FzQixRQUFRLEVBQUVyQixlQUFlO0VBQ3pCc0IsVUFBVSxFQUFFckIsaUJBQWlCO0VBQzdCO0VBQ0FzQixTQUFTLEVBQUVyQixnQkFBZ0I7RUFDM0I7RUFDQXNCLFdBQVcsRUFBRXJCLGlCQUFpQjtFQUM5QjtFQUNBc0IsVUFBVSxFQUFFckIsaUJBQWlCO0VBQzdCc0IsVUFBVSxFQUFFckIsaUJBQWlCO0VBQzdCc0IsVUFBVSxFQUFFckIsaUJBQWlCO0VBQzdCO0VBQ0FzQixjQUFjLEVBQUVyQixxQkFBcUI7RUFDckM7RUFDQXNCLGNBQWMsRUFBRWYscUJBQXFCO0VBQ3JDO0VBQ0FnQixTQUFTLEVBQUVyQixnQkFBZ0I7RUFDM0I7RUFDQXNCLFdBQVcsRUFBRXBCLGlCQUFpQjtFQUM5QjtFQUNBcUIsVUFBVSxFQUFFcEIsaUJBQWlCO0VBQzdCcUIsVUFBVSxFQUFFcEIsaUJBQWlCO0VBQzdCcUIsU0FBUyxFQUFFeEIsZ0JBQWdCO0VBQzNCeUIsaUJBQWlCLEVBQUVwQix3QkFBd0I7RUFDM0NxQixpQkFBaUIsRUFBRTVCO0FBQ3JCLENBQUMsQ0FBQzs7QUFFRjtBQUNBLE1BQU02QixtQkFBbUIsNEJBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsQ0FBQywrQkFDeERDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxZQUFZLENBQUNDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxnQ0FDNUMsSUFBSTtBQUVSLE1BQU1HLFlBQVksNEJBQUc7RUFDbkJ6QixTQUFTLEVBQUU7SUFBRTBCLFFBQVEsRUFBRU47RUFBb0I7QUFDN0MsQ0FBQztBQUVELE1BQU1PLFVBQVUsNEJBQUcsQ0FBQ2xELEtBQUssQ0FBQztBQUUxQixNQUFNbUQsS0FBSyw0QkFBR3RELFdBQVcsQ0FDdkJ5QixPQUFPLEVBQ1AwQixZQUFZLEVBQ1ovQyxtQkFBbUIsQ0FBQ0gsZUFBZSxDQUFDLEdBQUdvRCxVQUFVLENBQUMsQ0FBQyxDQUNwRDtBQUVELGVBQWVDLEtBQUsifQ==