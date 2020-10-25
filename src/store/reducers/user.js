import * as Actions from '../actions/user';

const initialState = {
  id: '',
  username: '',
  avatar: '',
};

const user = function (state = initialState, { type, payload }) {
  switch (type) {
    case Actions.LOGIN: {
      return {
        ...state,
        id: payload.id,
        username: payload.login,
        avatar: payload.avatar_url,
      };
    }
    case Actions.LOGOUT: {
      return {
        ...state,
        id: '',
        username: '',
        avatar: '',
      };
    }

    default: {
      return state;
    }
  }
};

export default user;
