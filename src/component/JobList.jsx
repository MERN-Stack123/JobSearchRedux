// src/components/JobList.js

import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import JobCard from "./JobCard";

const JobList = () => {
  const jobs = useSelector((state) => state.jobs);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  if (loading) {
    return <Typography variant="body1">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="body1">Error: {error}</Typography>;
  }

  if (jobs.length === 0) {
    return <Typography variant="body1">No jobs found.</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {jobs.map((job) => (
        <Grid item key={job.id} xs={12} md={6} lg={4}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobList;
