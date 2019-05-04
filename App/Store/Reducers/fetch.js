import { TEST_FETCH, TEST_FETCH_SUCCESS, TEST_FETCH_FAILURE } from '../Actions/actionTypes';

const initialState = {
  data: {},
  loading: false,
  error: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_FETCH:
      return {
        ...state,
        loading: true,
      };
    case TEST_FETCH_SUCCESS:
      return {
        ...state,
        data: { ...action.payload },
        loading: false,
      };
    case TEST_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
