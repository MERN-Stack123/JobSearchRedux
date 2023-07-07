// src/components/SearchForm.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Grid } from "@mui/material";
import {
  updateJobProfile,
  updateLocation,
  searchJobs,
} from "../Redux/actions/actions";

const JobSearch = () => {
  const dispatch = useDispatch();
  const jobProfile = useSelector((state) => state.jobProfile);
  const location = useSelector((state) => state.location);

  const handleSearch = (e) => {
    // const { jobProfile, location } = e.target;
    dispatch(searchJobs(jobProfile, location));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
        <TextField
          label="Job Profile"
          variant="outlined"
          fullWidth
          value={jobProfile}
          onChange={(e) => dispatch(updateJobProfile(e.target.value))}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          value={location}
          onChange={(e) => dispatch(updateLocation(e.target.value))}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default JobSearch;
