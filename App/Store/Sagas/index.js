import { takeLatest, all } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import { TEST_FETCH } from '../Actions/actionTypes';
import { fetchData } from './fetch';

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(TEST_FETCH, fetchData),
  ]);
}
