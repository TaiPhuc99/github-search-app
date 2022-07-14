import {
  CLEAR_USER,
  GET_USERS,
  GET_USER_AND_REPOS,
  SET_LOADING,
} from "./GithubConstant";

export const searchUsers = (values) => {
  return {
    type: GET_USERS,
    payload: values,
  };
};

export const isLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};

export const getUserAndRepo = (user, repos) => {
  return {
    type: GET_USER_AND_REPOS,
    payload: { user, repos },
  };
};
