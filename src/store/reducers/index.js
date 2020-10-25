import { combineReducers } from 'redux';
import user from '../reducers/user';
import repositories from '../reducers/repositories';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whieList: ['user', 'repositories'],
};

const rootReducer = combineReducers({
  user,
  repositories,
});
export default persistReducer(persistConfig, rootReducer);
