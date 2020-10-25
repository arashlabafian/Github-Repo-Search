import { User } from '../../api/API';
import { persistor } from '../../store/index';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = user => {
  return async dispatch => {
    try {
      const res = await User.login(user);
      const { avatar_url, login, id } = res.data;
      console.log(res);
      dispatch({
        type: LOGIN,
        payload: {
          avatar_url,
          login,
          id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
export const logout = user => {
  return async dispatch => {
    try {
      await persistor.purge();

      dispatch({
        type: LOGOUT,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
