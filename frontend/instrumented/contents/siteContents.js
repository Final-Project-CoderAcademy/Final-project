function cov_2eddkxtqr() {
  var path = "/Users/yukatoshima/Desktop/Final-assignment/Final-project/frontend/src/contents/siteContents.js";
  var hash = "3600807181bce378e8e2d07d63b88153054c47a6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yukatoshima/Desktop/Final-assignment/Final-project/frontend/src/contents/siteContents.js",
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
          column: 35
        },
        end: {
          line: 7,
          column: 56
        }
      },
      "4": {
        start: {
          line: 8,
          column: 35
        },
        end: {
          line: 8,
          column: 56
        }
      },
      "5": {
        start: {
          line: 9,
          column: 32
        },
        end: {
          line: 9,
          column: 50
        }
      },
      "6": {
        start: {
          line: 12,
          column: 35
        },
        end: {
          line: 12,
          column: 56
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
          column: 32
        },
        end: {
          line: 14,
          column: 50
        }
      },
      "9": {
        start: {
          line: 15,
          column: 33
        },
        end: {
          line: 15,
          column: 52
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
          line: 29,
          column: 35
        },
        end: {
          line: 29,
          column: 56
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
          column: 32
        },
        end: {
          line: 31,
          column: 50
        }
      },
      "20": {
        start: {
          line: 32,
          column: 33
        },
        end: {
          line: 32,
          column: 52
        }
      },
      "21": {
        start: {
          line: 35,
          column: 38
        },
        end: {
          line: 35,
          column: 62
        }
      },
      "22": {
        start: {
          line: 36,
          column: 38
        },
        end: {
          line: 36,
          column: 62
        }
      },
      "23": {
        start: {
          line: 37,
          column: 35
        },
        end: {
          line: 37,
          column: 56
        }
      },
      "24": {
        start: {
          line: 38,
          column: 36
        },
        end: {
          line: 38,
          column: 58
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
      "24": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3600807181bce378e8e2d07d63b88153054c47a6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2eddkxtqr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2eddkxtqr();
// Get all sites
export const SITES_LIST_REQUEST = (cov_2eddkxtqr().s[0]++, "SITES_LIST_REQUEST");
export const SITES_LIST_SUCCESS = (cov_2eddkxtqr().s[1]++, "SITES_LIST_SUCCESS");
export const SITES_LIST_FAIL = (cov_2eddkxtqr().s[2]++, "SITES_LIST_FAIL");

// Get one site detail
export const SITE_DETAIL_REQUEST = (cov_2eddkxtqr().s[3]++, "SITE_DETAIL_REQUEST");
export const SITE_DETAIL_SUCCESS = (cov_2eddkxtqr().s[4]++, "SITE_DETAIL_SUCCESS");
export const SITE_DETAIL_FAIL = (cov_2eddkxtqr().s[5]++, "SITE_DETAIL_FAIL");

// Create one site detail
export const SITE_CREATE_REQUEST = (cov_2eddkxtqr().s[6]++, "SITE_CREATE_REQUEST");
export const SITE_CREATE_SUCCESS = (cov_2eddkxtqr().s[7]++, "SITE_CREATE_SUCCESS");
export const SITE_CREATE_FAIL = (cov_2eddkxtqr().s[8]++, "SITE_CREATE_FAIL");
export const SITE_CREATE_RESET = (cov_2eddkxtqr().s[9]++, "SITE_CREATE_RESET");

// Update one site detail
export const SITE_UPDATE_REQUEST = (cov_2eddkxtqr().s[10]++, "SITE_UPDATE_REQUEST");
export const SITE_UPDATE_SUCCESS = (cov_2eddkxtqr().s[11]++, "SITE_UPDATE_SUCCESS");
export const SITE_UPDATE_FAIL = (cov_2eddkxtqr().s[12]++, "SITE_UPDATE_FAIL");
export const SITE_UPDATE_RESET = (cov_2eddkxtqr().s[13]++, "SITE_UPDATE_RESET");

// Delete one site detail
export const SITE_DELETE_REQUEST = (cov_2eddkxtqr().s[14]++, "SITE_DELETE_REQUEST");
export const SITE_DELETE_SUCCESS = (cov_2eddkxtqr().s[15]++, "SITE_DELETE_SUCCESS");
export const SITE_DELETE_FAIL = (cov_2eddkxtqr().s[16]++, "SITE_DELETE_FAIL");

// add comment to one site
export const ADD_COMMENT_REQUEST = (cov_2eddkxtqr().s[17]++, "ADD_COMMENT_REQUEST");
export const ADD_COMMENT_SUCCESS = (cov_2eddkxtqr().s[18]++, "ADD_COMMENT_SUCCESS");
export const ADD_COMMENT_FAIL = (cov_2eddkxtqr().s[19]++, "ADD_COMMENT_FAIL");
export const ADD_COMMENT_RESET = (cov_2eddkxtqr().s[20]++, "ADD_COMMENT_RESET");

// delete comment to one site
export const DELETE_COMMENT_REQUEST = (cov_2eddkxtqr().s[21]++, "DELETE_COMMENT_REQUEST");
export const DELETE_COMMENT_SUCCESS = (cov_2eddkxtqr().s[22]++, "DELETE_COMMENT_SUCCESS");
export const DELETE_COMMENT_FAIL = (cov_2eddkxtqr().s[23]++, "DELETE_COMMENT_FAIL");
export const DELETE_COMMENT_RESET = (cov_2eddkxtqr().s[24]++, "DELETE_COMMENT_RESET");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTSVRFU19MSVNUX1JFUVVFU1QiLCJTSVRFU19MSVNUX1NVQ0NFU1MiLCJTSVRFU19MSVNUX0ZBSUwiLCJTSVRFX0RFVEFJTF9SRVFVRVNUIiwiU0lURV9ERVRBSUxfU1VDQ0VTUyIsIlNJVEVfREVUQUlMX0ZBSUwiLCJTSVRFX0NSRUFURV9SRVFVRVNUIiwiU0lURV9DUkVBVEVfU1VDQ0VTUyIsIlNJVEVfQ1JFQVRFX0ZBSUwiLCJTSVRFX0NSRUFURV9SRVNFVCIsIlNJVEVfVVBEQVRFX1JFUVVFU1QiLCJTSVRFX1VQREFURV9TVUNDRVNTIiwiU0lURV9VUERBVEVfRkFJTCIsIlNJVEVfVVBEQVRFX1JFU0VUIiwiU0lURV9ERUxFVEVfUkVRVUVTVCIsIlNJVEVfREVMRVRFX1NVQ0NFU1MiLCJTSVRFX0RFTEVURV9GQUlMIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMIiwiQUREX0NPTU1FTlRfUkVTRVQiLCJERUxFVEVfQ09NTUVOVF9SRVFVRVNUIiwiREVMRVRFX0NPTU1FTlRfU1VDQ0VTUyIsIkRFTEVURV9DT01NRU5UX0ZBSUwiLCJERUxFVEVfQ09NTUVOVF9SRVNFVCJdLCJzb3VyY2VzIjpbInNpdGVDb250ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZXQgYWxsIHNpdGVzXG5leHBvcnQgY29uc3QgU0lURVNfTElTVF9SRVFVRVNUID0gXCJTSVRFU19MSVNUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTSVRFU19MSVNUX1NVQ0NFU1MgPSBcIlNJVEVTX0xJU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFNJVEVTX0xJU1RfRkFJTCA9IFwiU0lURVNfTElTVF9GQUlMXCI7XG5cbi8vIEdldCBvbmUgc2l0ZSBkZXRhaWxcbmV4cG9ydCBjb25zdCBTSVRFX0RFVEFJTF9SRVFVRVNUID0gXCJTSVRFX0RFVEFJTF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgU0lURV9ERVRBSUxfU1VDQ0VTUyA9IFwiU0lURV9ERVRBSUxfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFNJVEVfREVUQUlMX0ZBSUwgPSBcIlNJVEVfREVUQUlMX0ZBSUxcIjtcblxuLy8gQ3JlYXRlIG9uZSBzaXRlIGRldGFpbFxuZXhwb3J0IGNvbnN0IFNJVEVfQ1JFQVRFX1JFUVVFU1QgPSBcIlNJVEVfQ1JFQVRFX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTSVRFX0NSRUFURV9TVUNDRVNTID0gXCJTSVRFX0NSRUFURV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgU0lURV9DUkVBVEVfRkFJTCA9IFwiU0lURV9DUkVBVEVfRkFJTFwiO1xuZXhwb3J0IGNvbnN0IFNJVEVfQ1JFQVRFX1JFU0VUID0gXCJTSVRFX0NSRUFURV9SRVNFVFwiO1xuXG4vLyBVcGRhdGUgb25lIHNpdGUgZGV0YWlsXG5leHBvcnQgY29uc3QgU0lURV9VUERBVEVfUkVRVUVTVCA9IFwiU0lURV9VUERBVEVfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFNJVEVfVVBEQVRFX1NVQ0NFU1MgPSBcIlNJVEVfVVBEQVRFX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBTSVRFX1VQREFURV9GQUlMID0gXCJTSVRFX1VQREFURV9GQUlMXCI7XG5leHBvcnQgY29uc3QgU0lURV9VUERBVEVfUkVTRVQgPSBcIlNJVEVfVVBEQVRFX1JFU0VUXCI7XG5cbi8vIERlbGV0ZSBvbmUgc2l0ZSBkZXRhaWxcbmV4cG9ydCBjb25zdCBTSVRFX0RFTEVURV9SRVFVRVNUID0gXCJTSVRFX0RFTEVURV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgU0lURV9ERUxFVEVfU1VDQ0VTUyA9IFwiU0lURV9ERUxFVEVfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFNJVEVfREVMRVRFX0ZBSUwgPSBcIlNJVEVfREVMRVRFX0ZBSUxcIjtcblxuLy8gYWRkIGNvbW1lbnQgdG8gb25lIHNpdGVcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUwgPSBcIkFERF9DT01NRU5UX0ZBSUxcIjtcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVNFVCA9IFwiQUREX0NPTU1FTlRfUkVTRVRcIjtcblxuLy8gZGVsZXRlIGNvbW1lbnQgdG8gb25lIHNpdGVcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09NTUVOVF9SRVFVRVNUID0gXCJERUxFVEVfQ09NTUVOVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0NPTU1FTlRfU1VDQ0VTUyA9IFwiREVMRVRFX0NPTU1FTlRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9DT01NRU5UX0ZBSUwgPSBcIkRFTEVURV9DT01NRU5UX0ZBSUxcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09NTUVOVF9SRVNFVCA9IFwiREVMRVRFX0NPTU1FTlRfUkVTRVRcIjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaO0FBQ0EsT0FBTyxNQUFNQSxrQkFBa0IsNEJBQUcsb0JBQW9CO0FBQ3RELE9BQU8sTUFBTUMsa0JBQWtCLDRCQUFHLG9CQUFvQjtBQUN0RCxPQUFPLE1BQU1DLGVBQWUsNEJBQUcsaUJBQWlCOztBQUVoRDtBQUNBLE9BQU8sTUFBTUMsbUJBQW1CLDRCQUFHLHFCQUFxQjtBQUN4RCxPQUFPLE1BQU1DLG1CQUFtQiw0QkFBRyxxQkFBcUI7QUFDeEQsT0FBTyxNQUFNQyxnQkFBZ0IsNEJBQUcsa0JBQWtCOztBQUVsRDtBQUNBLE9BQU8sTUFBTUMsbUJBQW1CLDRCQUFHLHFCQUFxQjtBQUN4RCxPQUFPLE1BQU1DLG1CQUFtQiw0QkFBRyxxQkFBcUI7QUFDeEQsT0FBTyxNQUFNQyxnQkFBZ0IsNEJBQUcsa0JBQWtCO0FBQ2xELE9BQU8sTUFBTUMsaUJBQWlCLDRCQUFHLG1CQUFtQjs7QUFFcEQ7QUFDQSxPQUFPLE1BQU1DLG1CQUFtQiw2QkFBRyxxQkFBcUI7QUFDeEQsT0FBTyxNQUFNQyxtQkFBbUIsNkJBQUcscUJBQXFCO0FBQ3hELE9BQU8sTUFBTUMsZ0JBQWdCLDZCQUFHLGtCQUFrQjtBQUNsRCxPQUFPLE1BQU1DLGlCQUFpQiw2QkFBRyxtQkFBbUI7O0FBRXBEO0FBQ0EsT0FBTyxNQUFNQyxtQkFBbUIsNkJBQUcscUJBQXFCO0FBQ3hELE9BQU8sTUFBTUMsbUJBQW1CLDZCQUFHLHFCQUFxQjtBQUN4RCxPQUFPLE1BQU1DLGdCQUFnQiw2QkFBRyxrQkFBa0I7O0FBRWxEO0FBQ0EsT0FBTyxNQUFNQyxtQkFBbUIsNkJBQUcscUJBQXFCO0FBQ3hELE9BQU8sTUFBTUMsbUJBQW1CLDZCQUFHLHFCQUFxQjtBQUN4RCxPQUFPLE1BQU1DLGdCQUFnQiw2QkFBRyxrQkFBa0I7QUFDbEQsT0FBTyxNQUFNQyxpQkFBaUIsNkJBQUcsbUJBQW1COztBQUVwRDtBQUNBLE9BQU8sTUFBTUMsc0JBQXNCLDZCQUFHLHdCQUF3QjtBQUM5RCxPQUFPLE1BQU1DLHNCQUFzQiw2QkFBRyx3QkFBd0I7QUFDOUQsT0FBTyxNQUFNQyxtQkFBbUIsNkJBQUcscUJBQXFCO0FBQ3hELE9BQU8sTUFBTUMsb0JBQW9CLDZCQUFHLHNCQUFzQiJ9