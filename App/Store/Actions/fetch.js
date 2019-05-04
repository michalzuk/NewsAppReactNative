import { TEST_FETCH } from './actionTypes';

export function testRequest(data) {
  return {
    type: TEST_FETCH,
    payload: data,
  };
}
