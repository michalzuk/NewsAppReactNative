import { takeLatest, all } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import { FETCH_TOP_HEADLINES } from '../Actions/actionTypes';
import { fetchData } from './fetch';

export default function* root() {
  yield all([takeLatest(FETCH_TOP_HEADLINES, fetchData)]);
}
