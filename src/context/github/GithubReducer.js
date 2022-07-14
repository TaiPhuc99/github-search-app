import {
  CLEAR_USER,
  GET_USERS,
  GET_USER_AND_REPOS,
  SET_LOADING,
} from "./GithubConstant";

const githubReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_USERS: {
      state.users = payload;
      state.loading = false;
      return { ...state };
    }

    case SET_LOADING: {
      state.loading = true;
      return { ...state };
    }

    case CLEAR_USER: {
      state.users = [];
      return { ...state };
    }

    case GET_USER_AND_REPOS: {
      state.user = payload.user;
      state.repos = payload.repos;
      state.loading = false;
      return { ...state };
    }

    default:
      break;
  }
};

export default githubReducer;
