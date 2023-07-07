//src/Redux/reducers/SearchReducer.jsx

import {
  UPDATE_JOB_PROFILE,
  UPDATE_LOCATION,
  SEARCH_JOBS_REQUEST,
  SEARCH_JOBS_SUCCESS,
  SEARCH_JOBS_FAILURE,
} from "../actions/actionsTypes";

const initialState = {
  jobProfile: "",
  location: "",
  jobs: [],
  loading: false,
  error: null,
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_JOB_PROFILE:
      return {
        ...state,
        jobProfile: action.payload,
      };
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case SEARCH_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    case SEARCH_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default SearchReducer;
