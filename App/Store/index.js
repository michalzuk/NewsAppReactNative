import configureStore from './CreateStore';
import { combineReducers } from 'redux';
import rootSaga from '../Store/Sagas';
import topHeadlines from './Reducers/topHeadlines';

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    topHeadlines,
  });

  return configureStore(rootReducer, rootSaga);
};
