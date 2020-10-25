import * as Actions from '../actions/repositories';

const initialState = {
  data: [],
  user: '',
  repo: '',
};

const repositories = function (state = initialState, { type, payload }) {
  switch (type) {
    case Actions.GET_REPOSITORIES: {
      return {
        ...state,
        data: payload.data,
        user: payload.search.user,
        repo: payload.search.repo,
      };
    }
    case Actions.CLEAR_REPOSITORIES: {
      return {
        ...state,
        data: [],
        user: '',
        repo: '',
      };
    }

    default: {
      return state;
    }
  }
};

export default repositories;
