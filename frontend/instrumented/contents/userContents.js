function cov_2aydolbqw4() {
  var path = "/Users/yukatoshima/Desktop/Final-assignment/Final-project/frontend/src/contents/userContents.js";
  var hash = "43ca67be9bde7458947ff2bbbef99c969c96b080";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yukatoshima/Desktop/Final-assignment/Final-project/frontend/src/contents/userContents.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 37
        },
        end: {
          line: 2,
          column: 60
        }
      },
      "1": {
        start: {
          line: 3,
          column: 37
        },
        end: {
          line: 3,
          column: 60
        }
      },
      "2": {
        start: {
          line: 4,
          column: 34
        },
        end: {
          line: 4,
          column: 54
        }
      },
      "3": {
        start: {
          line: 5,
          column: 35
        },
        end: {
          line: 5,
          column: 56
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
          column: 34
        },
        end: {
          line: 9,
          column: 54
        }
      },
      "6": {
        start: {
          line: 10,
          column: 31
        },
        end: {
          line: 10,
          column: 48
        }
      },
      "7": {
        start: {
          line: 11,
          column: 27
        },
        end: {
          line: 11,
          column: 48
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
          column: 35
        },
        end: {
          line: 15,
          column: 56
        }
      },
      "10": {
        start: {
          line: 16,
          column: 32
        },
        end: {
          line: 16,
          column: 50
        }
      },
      "11": {
        start: {
          line: 17,
          column: 33
        },
        end: {
          line: 17,
          column: 52
        }
      },
      "12": {
        start: {
          line: 20,
          column: 35
        },
        end: {
          line: 20,
          column: 56
        }
      },
      "13": {
        start: {
          line: 21,
          column: 35
        },
        end: {
          line: 21,
          column: 56
        }
      },
      "14": {
        start: {
          line: 22,
          column: 32
        },
        end: {
          line: 22,
          column: 50
        }
      },
      "15": {
        start: {
          line: 23,
          column: 33
        },
        end: {
          line: 23,
          column: 52
        }
      },
      "16": {
        start: {
          line: 26,
          column: 33
        },
        end: {
          line: 26,
          column: 52
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
          line: 28,
          column: 30
        },
        end: {
          line: 28,
          column: 46
        }
      },
      "19": {
        start: {
          line: 29,
          column: 31
        },
        end: {
          line: 29,
          column: 48
        }
      },
      "20": {
        start: {
          line: 32,
          column: 35
        },
        end: {
          line: 32,
          column: 56
        }
      },
      "21": {
        start: {
          line: 33,
          column: 35
        },
        end: {
          line: 33,
          column: 56
        }
      },
      "22": {
        start: {
          line: 34,
          column: 32
        },
        end: {
          line: 34,
          column: 50
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
      "22": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "43ca67be9bde7458947ff2bbbef99c969c96b080"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2aydolbqw4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2aydolbqw4();
// sign up request
export const USER_REGISTER_REQUEST = (cov_2aydolbqw4().s[0]++, "USER_REGISTER_REQUEST");
export const USER_REGISTER_SUCCESS = (cov_2aydolbqw4().s[1]++, "USER_REGISTER_SUCCESS");
export const USER_REGISTER_FAIL = (cov_2aydolbqw4().s[2]++, "USER_REGISTER_FAIL");
export const USER_REGISTER_RESET = (cov_2aydolbqw4().s[3]++, "USER_REGISTER_RESET");

// log in request
export const USER_LOGIN_REQUEST = (cov_2aydolbqw4().s[4]++, "USER_LOGIN_REQUEST");
export const USER_LOGIN_SUCCESS = (cov_2aydolbqw4().s[5]++, "USER_LOGIN_SUCCESS");
export const USER_LOGIN_FAIL = (cov_2aydolbqw4().s[6]++, "USER_LOGIN_FAIL");
export const USER_LOGOUT = (cov_2aydolbqw4().s[7]++, "USER_LOGOUT_REQUEST");

// user details request
export const USER_DETAIL_REQUEST = (cov_2aydolbqw4().s[8]++, "USER_DETAIL_REQUEST");
export const USER_DETAIL_SUCCESS = (cov_2aydolbqw4().s[9]++, "USER_DETAIL_SUCCESS");
export const USER_DETAIL_FAIL = (cov_2aydolbqw4().s[10]++, "USER_DETAIL_FAIL");
export const USER_DETAIL_RESET = (cov_2aydolbqw4().s[11]++, "USER_DETAIL_RESET");

// update user details request
export const USER_UPDATE_REQUEST = (cov_2aydolbqw4().s[12]++, "USER_UPDATE_REQUEST");
export const USER_UPDATE_SUCCESS = (cov_2aydolbqw4().s[13]++, "USER_UPDATE_SUCCESS");
export const USER_UPDATE_FAIL = (cov_2aydolbqw4().s[14]++, "USER_UPDATE_FAIL");
export const USER_UPDATE_RESET = (cov_2aydolbqw4().s[15]++, "USER_UPDATE_RESET");

// users list for admin
export const USER_LIST_REQUEST = (cov_2aydolbqw4().s[16]++, "USER_LIST_REQUEST");
export const USER_LIST_SUCCESS = (cov_2aydolbqw4().s[17]++, "USER_LIST_SUCCESS");
export const USER_LIST_FAIL = (cov_2aydolbqw4().s[18]++, "USER_LIST_FAIL");
export const USER_LIST_RESET = (cov_2aydolbqw4().s[19]++, "USER_LIST_RESET");

// delete user for admin
export const USER_DELETE_REQUEST = (cov_2aydolbqw4().s[20]++, "USER_DELETE_REQUEST");
export const USER_DELETE_SUCCESS = (cov_2aydolbqw4().s[21]++, "USER_DELETE_SUCCESS");
export const USER_DELETE_FAIL = (cov_2aydolbqw4().s[22]++, "USER_DELETE_FAIL");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVU0VSX1JFR0lTVEVSX1JFUVVFU1QiLCJVU0VSX1JFR0lTVEVSX1NVQ0NFU1MiLCJVU0VSX1JFR0lTVEVSX0ZBSUwiLCJVU0VSX1JFR0lTVEVSX1JFU0VUIiwiVVNFUl9MT0dJTl9SRVFVRVNUIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiVVNFUl9MT0dJTl9GQUlMIiwiVVNFUl9MT0dPVVQiLCJVU0VSX0RFVEFJTF9SRVFVRVNUIiwiVVNFUl9ERVRBSUxfU1VDQ0VTUyIsIlVTRVJfREVUQUlMX0ZBSUwiLCJVU0VSX0RFVEFJTF9SRVNFVCIsIlVTRVJfVVBEQVRFX1JFUVVFU1QiLCJVU0VSX1VQREFURV9TVUNDRVNTIiwiVVNFUl9VUERBVEVfRkFJTCIsIlVTRVJfVVBEQVRFX1JFU0VUIiwiVVNFUl9MSVNUX1JFUVVFU1QiLCJVU0VSX0xJU1RfU1VDQ0VTUyIsIlVTRVJfTElTVF9GQUlMIiwiVVNFUl9MSVNUX1JFU0VUIiwiVVNFUl9ERUxFVEVfUkVRVUVTVCIsIlVTRVJfREVMRVRFX1NVQ0NFU1MiLCJVU0VSX0RFTEVURV9GQUlMIl0sInNvdXJjZXMiOlsidXNlckNvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNpZ24gdXAgcmVxdWVzdFxuZXhwb3J0IGNvbnN0IFVTRVJfUkVHSVNURVJfUkVRVUVTVCA9IFwiVVNFUl9SRUdJU1RFUl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVVNFUl9SRUdJU1RFUl9TVUNDRVNTID0gXCJVU0VSX1JFR0lTVEVSX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVU0VSX1JFR0lTVEVSX0ZBSUwgPSBcIlVTRVJfUkVHSVNURVJfRkFJTFwiO1xuZXhwb3J0IGNvbnN0IFVTRVJfUkVHSVNURVJfUkVTRVQgPSBcIlVTRVJfUkVHSVNURVJfUkVTRVRcIjtcblxuLy8gbG9nIGluIHJlcXVlc3RcbmV4cG9ydCBjb25zdCBVU0VSX0xPR0lOX1JFUVVFU1QgPSBcIlVTRVJfTE9HSU5fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVTRVJfTE9HSU5fU1VDQ0VTUyA9IFwiVVNFUl9MT0dJTl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVVNFUl9MT0dJTl9GQUlMID0gXCJVU0VSX0xPR0lOX0ZBSUxcIjtcbmV4cG9ydCBjb25zdCBVU0VSX0xPR09VVCA9IFwiVVNFUl9MT0dPVVRfUkVRVUVTVFwiO1xuXG4vLyB1c2VyIGRldGFpbHMgcmVxdWVzdFxuZXhwb3J0IGNvbnN0IFVTRVJfREVUQUlMX1JFUVVFU1QgPSBcIlVTRVJfREVUQUlMX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVU0VSX0RFVEFJTF9TVUNDRVNTID0gXCJVU0VSX0RFVEFJTF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVVNFUl9ERVRBSUxfRkFJTCA9IFwiVVNFUl9ERVRBSUxfRkFJTFwiO1xuZXhwb3J0IGNvbnN0IFVTRVJfREVUQUlMX1JFU0VUID0gXCJVU0VSX0RFVEFJTF9SRVNFVFwiO1xuXG4vLyB1cGRhdGUgdXNlciBkZXRhaWxzIHJlcXVlc3RcbmV4cG9ydCBjb25zdCBVU0VSX1VQREFURV9SRVFVRVNUID0gXCJVU0VSX1VQREFURV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVVNFUl9VUERBVEVfU1VDQ0VTUyA9IFwiVVNFUl9VUERBVEVfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFVTRVJfVVBEQVRFX0ZBSUwgPSBcIlVTRVJfVVBEQVRFX0ZBSUxcIjtcbmV4cG9ydCBjb25zdCBVU0VSX1VQREFURV9SRVNFVCA9IFwiVVNFUl9VUERBVEVfUkVTRVRcIjtcblxuLy8gdXNlcnMgbGlzdCBmb3IgYWRtaW5cbmV4cG9ydCBjb25zdCBVU0VSX0xJU1RfUkVRVUVTVCA9IFwiVVNFUl9MSVNUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVU0VSX0xJU1RfU1VDQ0VTUyA9IFwiVVNFUl9MSVNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVU0VSX0xJU1RfRkFJTCA9IFwiVVNFUl9MSVNUX0ZBSUxcIjtcbmV4cG9ydCBjb25zdCBVU0VSX0xJU1RfUkVTRVQgPSBcIlVTRVJfTElTVF9SRVNFVFwiO1xuXG4vLyBkZWxldGUgdXNlciBmb3IgYWRtaW5cbmV4cG9ydCBjb25zdCBVU0VSX0RFTEVURV9SRVFVRVNUID0gXCJVU0VSX0RFTEVURV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVVNFUl9ERUxFVEVfU1VDQ0VTUyA9IFwiVVNFUl9ERUxFVEVfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFVTRVJfREVMRVRFX0ZBSUwgPSBcIlVTRVJfREVMRVRFX0ZBSUxcIjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWjtBQUNBLE9BQU8sTUFBTUEscUJBQXFCLDZCQUFHLHVCQUF1QjtBQUM1RCxPQUFPLE1BQU1DLHFCQUFxQiw2QkFBRyx1QkFBdUI7QUFDNUQsT0FBTyxNQUFNQyxrQkFBa0IsNkJBQUcsb0JBQW9CO0FBQ3RELE9BQU8sTUFBTUMsbUJBQW1CLDZCQUFHLHFCQUFxQjs7QUFFeEQ7QUFDQSxPQUFPLE1BQU1DLGtCQUFrQiw2QkFBRyxvQkFBb0I7QUFDdEQsT0FBTyxNQUFNQyxrQkFBa0IsNkJBQUcsb0JBQW9CO0FBQ3RELE9BQU8sTUFBTUMsZUFBZSw2QkFBRyxpQkFBaUI7QUFDaEQsT0FBTyxNQUFNQyxXQUFXLDZCQUFHLHFCQUFxQjs7QUFFaEQ7QUFDQSxPQUFPLE1BQU1DLG1CQUFtQiw2QkFBRyxxQkFBcUI7QUFDeEQsT0FBTyxNQUFNQyxtQkFBbUIsNkJBQUcscUJBQXFCO0FBQ3hELE9BQU8sTUFBTUMsZ0JBQWdCLDhCQUFHLGtCQUFrQjtBQUNsRCxPQUFPLE1BQU1DLGlCQUFpQiw4QkFBRyxtQkFBbUI7O0FBRXBEO0FBQ0EsT0FBTyxNQUFNQyxtQkFBbUIsOEJBQUcscUJBQXFCO0FBQ3hELE9BQU8sTUFBTUMsbUJBQW1CLDhCQUFHLHFCQUFxQjtBQUN4RCxPQUFPLE1BQU1DLGdCQUFnQiw4QkFBRyxrQkFBa0I7QUFDbEQsT0FBTyxNQUFNQyxpQkFBaUIsOEJBQUcsbUJBQW1COztBQUVwRDtBQUNBLE9BQU8sTUFBTUMsaUJBQWlCLDhCQUFHLG1CQUFtQjtBQUNwRCxPQUFPLE1BQU1DLGlCQUFpQiw4QkFBRyxtQkFBbUI7QUFDcEQsT0FBTyxNQUFNQyxjQUFjLDhCQUFHLGdCQUFnQjtBQUM5QyxPQUFPLE1BQU1DLGVBQWUsOEJBQUcsaUJBQWlCOztBQUVoRDtBQUNBLE9BQU8sTUFBTUMsbUJBQW1CLDhCQUFHLHFCQUFxQjtBQUN4RCxPQUFPLE1BQU1DLG1CQUFtQiw4QkFBRyxxQkFBcUI7QUFDeEQsT0FBTyxNQUFNQyxnQkFBZ0IsOEJBQUcsa0JBQWtCIn0=