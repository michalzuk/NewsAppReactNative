import { FETCH_TOP_HEADLINES, FETCH_TOP_HEADLINES_SUCCESS, FETCH_TOP_HEADLINES_FAILURE } from '../Actions/actionTypes';

const initialState = {
  data: {},
  loading: false,
  error: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOP_HEADLINES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TOP_HEADLINES_SUCCESS:
      return {
        ...state,
        data: { ...action.payload.data },
        loading: false,
      };
    case FETCH_TOP_HEADLINES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
