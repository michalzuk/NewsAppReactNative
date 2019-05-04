import configureStore from './CreateStore';
import { combineReducers } from 'redux';
import rootSaga from 'App/Store/Sagas';
import fetch from './Reducers/fetch';

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    fetch,
  });

  return configureStore(rootReducer, rootSaga);
};
