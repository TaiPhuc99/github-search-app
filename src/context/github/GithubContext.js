import { createContext, useReducer } from "react";
import { GithubService } from "../../services/GithubService";
import {
  clearUser,
  getUserAndRepo,
  isLoading,
  searchUsers,
} from "./GithubAction";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Set Loading
  const setLoading = () => {
    dispatch(isLoading());
  };

  // Handle Search Users
  const handleSearchUser = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const response = await GithubService.searchDataUsers(params);
    const { items } = await response.data;
    dispatch(searchUsers(items));
  };

  // Handle Clear Users
  const handleClearUser = () => {
    dispatch(clearUser());
  };

  // Handle get Single User & Repos
  const handleGetSingleUserAndRepos = async (username) => {
    const [user, repos] = await Promise.all([
      GithubService.getSingleUser(username),
      GithubService.getUserRepo(username),
    ]);

    const userData = await user.data;
    const reposData = await repos.data;
    dispatch(getUserAndRepo(userData, reposData));
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        setLoading,
        handleSearchUser,
        handleClearUser,
        handleGetSingleUserAndRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
