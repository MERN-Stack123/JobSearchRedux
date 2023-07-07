// src/actions/jobActions.js

import SearchAPI from "../../api/SearchAPI";

import {
  UPDATE_JOB_PROFILE,
  UPDATE_LOCATION,
  SEARCH_JOBS_REQUEST,
  SEARCH_JOBS_SUCCESS,
  SEARCH_JOBS_FAILURE,
} from "./actionsTypes";

// Action creators
const updateJobProfile = (profile) => ({
  type: UPDATE_JOB_PROFILE,
  payload: profile,
});

const updateLocation = (location) => ({
  type: UPDATE_LOCATION,
  payload: location,
});

const searchJobsRequest = () => ({
  type: SEARCH_JOBS_REQUEST,
});

const searchJobsSuccess = (jobs) => ({
  type: SEARCH_JOBS_SUCCESS,
  payload: jobs,
});

const searchJobsFailure = (error) => ({
  type: SEARCH_JOBS_FAILURE,
  payload: error,
});

// Thunk action creator
const searchJobs = (jobProfile, location) => {
  return async (dispatch) => {
    dispatch(searchJobsRequest());

    try {
      const jobs = await SearchAPI.searchJobs(jobProfile, location);
      dispatch(searchJobsSuccess(jobs));
    } catch (error) {
      dispatch(searchJobsFailure(error.message));
    }
  };
};

export {
  updateJobProfile,
  updateLocation,
  searchJobsRequest,
  searchJobsSuccess,
  searchJobsFailure,
  searchJobs,
};
