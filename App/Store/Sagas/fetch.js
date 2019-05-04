import { put, call } from 'redux-saga/effects';
import { TEST_FETCH_SUCCESS, TEST_FETCH_FAILURE } from '../Actions/actionTypes';
import axios from 'axios';

const API_ROOT = 'https://newsapi.org/v2/';
const API_KEY = '366b83c4663941828f0e1b007e88125a';

function fetchRequestData() {
  axios
    .get(`${API_ROOT}everything?q=bitcoin&from=2019-04-03&sortBy=publishedAt&apiKey=${API_KEY}`)
    .then(response => console.log(response));
}

export function* fetchData(action) {
  try {
    let response = yield call(fetchRequestData);

    yield put({ type: TEST_FETCH_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: TEST_FETCH_FAILURE, payload: e });
  }
}
