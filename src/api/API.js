import { Auth, Repos } from './axios';

const authReq = {
  get: url => Auth.get(url),
  post: (url, body) => Auth.post(url, body),
  put: (url, body) => Auth.put(url, body),
  del: url => Auth.delete(url),
};

const ReposReq = {
  get: url => Repos.get(url),
  post: (url, body) => Repos.post(url, body),
  put: (url, body) => Repos.put(url, body),
  del: url => Repos.delete(url),
};

const User = {
  login: fields => authReq.post(`/user`, fields),
};

const Search = {
  getRepos: data =>
    ReposReq.get(
      `/repos/${data.search.user}/${data.search.repo}/commits?page=${data.page}&per_page=100`
    ),
};

export { User, Search };
