import axios from "axios";
import { BASE_URL, GITHUB_TOKEN } from "./ConfigURL";

export const GithubService = {
  searchDataUsers: (param) => {
    return axios.get(`${BASE_URL}/search/users?${param}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
  },

  getSingleUser: (username) => {
    return axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
  },

  getUserRepo: (username) => {
    return axios.get(`${BASE_URL}/users/${username}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
  },
};
