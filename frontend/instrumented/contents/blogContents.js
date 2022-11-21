function cov_2dh6djxsj0() {
  var path = "/Users/yukatoshima/Desktop/Final-assignment/Final-project/frontend/src/contents/blogContents.js";
  var hash = "640f3f41550b29e39cf4c86261221223b05710b3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yukatoshima/Desktop/Final-assignment/Final-project/frontend/src/contents/blogContents.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 34
        },
        end: {
          line: 2,
          column: 54
        }
      },
      "1": {
        start: {
          line: 3,
          column: 34
        },
        end: {
          line: 3,
          column: 54
        }
      },
      "2": {
        start: {
          line: 4,
          column: 31
        },
        end: {
          line: 4,
          column: 48
        }
      },
      "3": {
        start: {
          line: 7,
          column: 34
        },
        end: {
          line: 7,
          column: 54
        }
      },
      "4": {
        start: {
          line: 8,
          column: 34
        },
        end: {
          line: 8,
          column: 54
        }
      },
      "5": {
        start: {
          line: 9,
          column: 31
        },
        end: {
          line: 9,
          column: 48
        }
      },
      "6": {
        start: {
          line: 10,
          column: 32
        },
        end: {
          line: 10,
          column: 50
        }
      },
      "7": {
        start: {
          line: 13,
          column: 35
        },
        end: {
          line: 13,
          column: 56
        }
      },
      "8": {
        start: {
          line: 14,
          column: 35
        },
        end: {
          line: 14,
          column: 56
        }
      },
      "9": {
        start: {
          line: 15,
          column: 32
        },
        end: {
          line: 15,
          column: 50
        }
      },
      "10": {
        start: {
          line: 18,
          column: 35
        },
        end: {
          line: 18,
          column: 56
        }
      },
      "11": {
        start: {
          line: 19,
          column: 35
        },
        end: {
          line: 19,
          column: 56
        }
      },
      "12": {
        start: {
          line: 20,
          column: 32
        },
        end: {
          line: 20,
          column: 50
        }
      },
      "13": {
        start: {
          line: 21,
          column: 33
        },
        end: {
          line: 21,
          column: 52
        }
      },
      "14": {
        start: {
          line: 24,
          column: 35
        },
        end: {
          line: 24,
          column: 56
        }
      },
      "15": {
        start: {
          line: 25,
          column: 35
        },
        end: {
          line: 25,
          column: 56
        }
      },
      "16": {
        start: {
          line: 26,
          column: 32
        },
        end: {
          line: 26,
          column: 50
        }
      },
      "17": {
        start: {
          line: 27,
          column: 33
        },
        end: {
          line: 27,
          column: 52
        }
      },
      "18": {
        start: {
          line: 30,
          column: 35
        },
        end: {
          line: 30,
          column: 56
        }
      },
      "19": {
        start: {
          line: 31,
          column: 35
        },
        end: {
          line: 31,
          column: 56
        }
      },
      "20": {
        start: {
          line: 32,
          column: 32
        },
        end: {
          line: 32,
          column: 50
        }
      },
      "21": {
        start: {
          line: 35,
          column: 35
        },
        end: {
          line: 35,
          column: 56
        }
      },
      "22": {
        start: {
          line: 36,
          column: 35
        },
        end: {
          line: 36,
          column: 56
        }
      },
      "23": {
        start: {
          line: 37,
          column: 32
        },
        end: {
          line: 37,
          column: 50
        }
      },
      "24": {
        start: {
          line: 40,
          column: 38
        },
        end: {
          line: 40,
          column: 62
        }
      },
      "25": {
        start: {
          line: 41,
          column: 38
        },
        end: {
          line: 41,
          column: 62
        }
      },
      "26": {
        start: {
          line: 42,
          column: 35
        },
        end: {
          line: 42,
          column: 56
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "640f3f41550b29e39cf4c86261221223b05710b3"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2dh6djxsj0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2dh6djxsj0();
// Get all blogs
export const BLOGS_LIST_REQUEST = (cov_2dh6djxsj0().s[0]++, "BLOGS_LIST_REQUEST");
export const BLOGS_LIST_SUCCESS = (cov_2dh6djxsj0().s[1]++, "BLOGS_LIST_SUCCESS");
export const BLOGS_LIST_FAIL = (cov_2dh6djxsj0().s[2]++, "BLOGS_LIST_FAIL");

// Get one user's all blogs by user's ID
export const USER_BLOGS_REQUEST = (cov_2dh6djxsj0().s[3]++, "USER_BLOGS_REQUEST");
export const USER_BLOGS_SUCCESS = (cov_2dh6djxsj0().s[4]++, "USER_BLOGS_SUCCESS");
export const USER_BLOGS_FAIL = (cov_2dh6djxsj0().s[5]++, "USER_BLOGS_FAIL");
export const USER_BLOGS_RESET = (cov_2dh6djxsj0().s[6]++, "USER_BLOGS_RESET");

// Get one blog article
export const BLOG_DETAIL_REQUEST = (cov_2dh6djxsj0().s[7]++, "BLOG_DETAIL_REQUEST");
export const BLOG_DETAIL_SUCCESS = (cov_2dh6djxsj0().s[8]++, "BLOG_DETAIL_SUCCESS");
export const BLOG_DETAIL_FAIL = (cov_2dh6djxsj0().s[9]++, "BLOG_DETAIL_FAIL");

// Create one blog article
export const BLOG_CREATE_REQUEST = (cov_2dh6djxsj0().s[10]++, "BLOG_CREATE_REQUEST");
export const BLOG_CREATE_SUCCESS = (cov_2dh6djxsj0().s[11]++, "BLOG_CREATE_SUCCESS");
export const BLOG_CREATE_FAIL = (cov_2dh6djxsj0().s[12]++, "BLOG_CREATE_FAIL");
export const BLOG_CREATE_RESET = (cov_2dh6djxsj0().s[13]++, "BLOG_CREATE_RESET");

// Update one blog article
export const BLOG_UPDATE_REQUEST = (cov_2dh6djxsj0().s[14]++, "BLOG_UPDATE_REQUEST");
export const BLOG_UPDATE_SUCCESS = (cov_2dh6djxsj0().s[15]++, "BLOG_UPDATE_SUCCESS");
export const BLOG_UPDATE_FAIL = (cov_2dh6djxsj0().s[16]++, "BLOG_UPDATE_FAIL");
export const BLOG_UPDATE_RESET = (cov_2dh6djxsj0().s[17]++, "BLOG_UPDATE_RESET");

// Delete one blog article
export const BLOG_DELETE_REQUEST = (cov_2dh6djxsj0().s[18]++, "BLOG_DELETE_REQUEST");
export const BLOG_DELETE_SUCCESS = (cov_2dh6djxsj0().s[19]++, "BLOG_DELETE_SUCCESS");
export const BLOG_DELETE_FAIL = (cov_2dh6djxsj0().s[20]++, "BLOG_DELETE_FAIL");

// add comment to one blog
export const ADD_COMMENT_REQUEST = (cov_2dh6djxsj0().s[21]++, "ADD_COMMENT_REQUEST");
export const ADD_COMMENT_SUCCESS = (cov_2dh6djxsj0().s[22]++, "ADD_COMMENT_SUCCESS");
export const ADD_COMMENT_FAIL = (cov_2dh6djxsj0().s[23]++, "ADD_COMMENT_FAIL");

// delete comment to one blog
export const DELETE_COMMENT_REQUEST = (cov_2dh6djxsj0().s[24]++, "DELETE_COMMENT_REQUEST");
export const DELETE_COMMENT_SUCCESS = (cov_2dh6djxsj0().s[25]++, "DELETE_COMMENT_SUCCESS");
export const DELETE_COMMENT_FAIL = (cov_2dh6djxsj0().s[26]++, "DELETE_COMMENT_FAIL");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCTE9HU19MSVNUX1JFUVVFU1QiLCJCTE9HU19MSVNUX1NVQ0NFU1MiLCJCTE9HU19MSVNUX0ZBSUwiLCJVU0VSX0JMT0dTX1JFUVVFU1QiLCJVU0VSX0JMT0dTX1NVQ0NFU1MiLCJVU0VSX0JMT0dTX0ZBSUwiLCJVU0VSX0JMT0dTX1JFU0VUIiwiQkxPR19ERVRBSUxfUkVRVUVTVCIsIkJMT0dfREVUQUlMX1NVQ0NFU1MiLCJCTE9HX0RFVEFJTF9GQUlMIiwiQkxPR19DUkVBVEVfUkVRVUVTVCIsIkJMT0dfQ1JFQVRFX1NVQ0NFU1MiLCJCTE9HX0NSRUFURV9GQUlMIiwiQkxPR19DUkVBVEVfUkVTRVQiLCJCTE9HX1VQREFURV9SRVFVRVNUIiwiQkxPR19VUERBVEVfU1VDQ0VTUyIsIkJMT0dfVVBEQVRFX0ZBSUwiLCJCTE9HX1VQREFURV9SRVNFVCIsIkJMT0dfREVMRVRFX1JFUVVFU1QiLCJCTE9HX0RFTEVURV9TVUNDRVNTIiwiQkxPR19ERUxFVEVfRkFJTCIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTCIsIkRFTEVURV9DT01NRU5UX1JFUVVFU1QiLCJERUxFVEVfQ09NTUVOVF9TVUNDRVNTIiwiREVMRVRFX0NPTU1FTlRfRkFJTCJdLCJzb3VyY2VzIjpbImJsb2dDb250ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZXQgYWxsIGJsb2dzXG5leHBvcnQgY29uc3QgQkxPR1NfTElTVF9SRVFVRVNUID0gXCJCTE9HU19MSVNUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBCTE9HU19MSVNUX1NVQ0NFU1MgPSBcIkJMT0dTX0xJU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEJMT0dTX0xJU1RfRkFJTCA9IFwiQkxPR1NfTElTVF9GQUlMXCI7XG5cbi8vIEdldCBvbmUgdXNlcidzIGFsbCBibG9ncyBieSB1c2VyJ3MgSURcbmV4cG9ydCBjb25zdCBVU0VSX0JMT0dTX1JFUVVFU1QgPSBcIlVTRVJfQkxPR1NfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVTRVJfQkxPR1NfU1VDQ0VTUyA9IFwiVVNFUl9CTE9HU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVVNFUl9CTE9HU19GQUlMID0gXCJVU0VSX0JMT0dTX0ZBSUxcIjtcbmV4cG9ydCBjb25zdCBVU0VSX0JMT0dTX1JFU0VUID0gXCJVU0VSX0JMT0dTX1JFU0VUXCI7XG5cbi8vIEdldCBvbmUgYmxvZyBhcnRpY2xlXG5leHBvcnQgY29uc3QgQkxPR19ERVRBSUxfUkVRVUVTVCA9IFwiQkxPR19ERVRBSUxfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEJMT0dfREVUQUlMX1NVQ0NFU1MgPSBcIkJMT0dfREVUQUlMX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBCTE9HX0RFVEFJTF9GQUlMID0gXCJCTE9HX0RFVEFJTF9GQUlMXCI7XG5cbi8vIENyZWF0ZSBvbmUgYmxvZyBhcnRpY2xlXG5leHBvcnQgY29uc3QgQkxPR19DUkVBVEVfUkVRVUVTVCA9IFwiQkxPR19DUkVBVEVfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEJMT0dfQ1JFQVRFX1NVQ0NFU1MgPSBcIkJMT0dfQ1JFQVRFX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBCTE9HX0NSRUFURV9GQUlMID0gXCJCTE9HX0NSRUFURV9GQUlMXCI7XG5leHBvcnQgY29uc3QgQkxPR19DUkVBVEVfUkVTRVQgPSBcIkJMT0dfQ1JFQVRFX1JFU0VUXCI7XG5cbi8vIFVwZGF0ZSBvbmUgYmxvZyBhcnRpY2xlXG5leHBvcnQgY29uc3QgQkxPR19VUERBVEVfUkVRVUVTVCA9IFwiQkxPR19VUERBVEVfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEJMT0dfVVBEQVRFX1NVQ0NFU1MgPSBcIkJMT0dfVVBEQVRFX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBCTE9HX1VQREFURV9GQUlMID0gXCJCTE9HX1VQREFURV9GQUlMXCI7XG5leHBvcnQgY29uc3QgQkxPR19VUERBVEVfUkVTRVQgPSBcIkJMT0dfVVBEQVRFX1JFU0VUXCI7XG5cbi8vIERlbGV0ZSBvbmUgYmxvZyBhcnRpY2xlXG5leHBvcnQgY29uc3QgQkxPR19ERUxFVEVfUkVRVUVTVCA9IFwiQkxPR19ERUxFVEVfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEJMT0dfREVMRVRFX1NVQ0NFU1MgPSBcIkJMT0dfREVMRVRFX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBCTE9HX0RFTEVURV9GQUlMID0gXCJCTE9HX0RFTEVURV9GQUlMXCI7XG5cbi8vIGFkZCBjb21tZW50IHRvIG9uZSBibG9nXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMID0gXCJBRERfQ09NTUVOVF9GQUlMXCI7XG5cbi8vIGRlbGV0ZSBjb21tZW50IHRvIG9uZSBibG9nXG5leHBvcnQgY29uc3QgREVMRVRFX0NPTU1FTlRfUkVRVUVTVCA9IFwiREVMRVRFX0NPTU1FTlRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9DT01NRU5UX1NVQ0NFU1MgPSBcIkRFTEVURV9DT01NRU5UX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09NTUVOVF9GQUlMID0gXCJERUxFVEVfQ09NTUVOVF9GQUlMXCI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWjtBQUNBLE9BQU8sTUFBTUEsa0JBQWtCLDZCQUFHLG9CQUFvQjtBQUN0RCxPQUFPLE1BQU1DLGtCQUFrQiw2QkFBRyxvQkFBb0I7QUFDdEQsT0FBTyxNQUFNQyxlQUFlLDZCQUFHLGlCQUFpQjs7QUFFaEQ7QUFDQSxPQUFPLE1BQU1DLGtCQUFrQiw2QkFBRyxvQkFBb0I7QUFDdEQsT0FBTyxNQUFNQyxrQkFBa0IsNkJBQUcsb0JBQW9CO0FBQ3RELE9BQU8sTUFBTUMsZUFBZSw2QkFBRyxpQkFBaUI7QUFDaEQsT0FBTyxNQUFNQyxnQkFBZ0IsNkJBQUcsa0JBQWtCOztBQUVsRDtBQUNBLE9BQU8sTUFBTUMsbUJBQW1CLDZCQUFHLHFCQUFxQjtBQUN4RCxPQUFPLE1BQU1DLG1CQUFtQiw2QkFBRyxxQkFBcUI7QUFDeEQsT0FBTyxNQUFNQyxnQkFBZ0IsNkJBQUcsa0JBQWtCOztBQUVsRDtBQUNBLE9BQU8sTUFBTUMsbUJBQW1CLDhCQUFHLHFCQUFxQjtBQUN4RCxPQUFPLE1BQU1DLG1CQUFtQiw4QkFBRyxxQkFBcUI7QUFDeEQsT0FBTyxNQUFNQyxnQkFBZ0IsOEJBQUcsa0JBQWtCO0FBQ2xELE9BQU8sTUFBTUMsaUJBQWlCLDhCQUFHLG1CQUFtQjs7QUFFcEQ7QUFDQSxPQUFPLE1BQU1DLG1CQUFtQiw4QkFBRyxxQkFBcUI7QUFDeEQsT0FBTyxNQUFNQyxtQkFBbUIsOEJBQUcscUJBQXFCO0FBQ3hELE9BQU8sTUFBTUMsZ0JBQWdCLDhCQUFHLGtCQUFrQjtBQUNsRCxPQUFPLE1BQU1DLGlCQUFpQiw4QkFBRyxtQkFBbUI7O0FBRXBEO0FBQ0EsT0FBTyxNQUFNQyxtQkFBbUIsOEJBQUcscUJBQXFCO0FBQ3hELE9BQU8sTUFBTUMsbUJBQW1CLDhCQUFHLHFCQUFxQjtBQUN4RCxPQUFPLE1BQU1DLGdCQUFnQiw4QkFBRyxrQkFBa0I7O0FBRWxEO0FBQ0EsT0FBTyxNQUFNQyxtQkFBbUIsOEJBQUcscUJBQXFCO0FBQ3hELE9BQU8sTUFBTUMsbUJBQW1CLDhCQUFHLHFCQUFxQjtBQUN4RCxPQUFPLE1BQU1DLGdCQUFnQiw4QkFBRyxrQkFBa0I7O0FBRWxEO0FBQ0EsT0FBTyxNQUFNQyxzQkFBc0IsOEJBQUcsd0JBQXdCO0FBQzlELE9BQU8sTUFBTUMsc0JBQXNCLDhCQUFHLHdCQUF3QjtBQUM5RCxPQUFPLE1BQU1DLG1CQUFtQiw4QkFBRyxxQkFBcUIifQ==