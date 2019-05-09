import { FETCH_TOP_HEADLINES } from './actionTypes';

export function testRequest(data) {
  return {
    type: FETCH_TOP_HEADLINES,
    payload: data,
  };
}
