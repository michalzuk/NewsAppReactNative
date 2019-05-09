import { put, call } from 'redux-saga/effects';
import { FETCH_TOP_HEADLINES_SUCCESS, FETCH_TOP_HEADLINES_FAILURE } from '../Actions/actionTypes';
import axios from 'axios';

const API_ROOT = 'https://newsapi.org/v2/';
const API_KEY = '366b83c4663941828f0e1b007e88125a';

function fetchRequestData() {
  return axios.get(`${API_ROOT}top-headlines?country=us&apiKey=${API_KEY}`);
}

export function* fetchData() {
  try {
    let response = yield call(fetchRequestData);

    yield put({ type: FETCH_TOP_HEADLINES_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: FETCH_TOP_HEADLINES_FAILURE, payload: e });
  }
}
