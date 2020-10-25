import { Search } from '../../api/API';

export const GET_REPOSITORIES = 'GET_REPOSITORIES';
export const CLEAR_REPOSITORIES = 'CLEAR_REPOSITORIES';

export const getRepositories = field => {
  return async dispatch => {
    try {
      const res = await Search.getRepos(field);
      const { data } = res;
      dispatch({
        type: GET_REPOSITORIES,
        payload: {
          data,
          search: field.search,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
export const clearRepositories = () => {
  return {
    type: CLEAR_REPOSITORIES,
  };
};
