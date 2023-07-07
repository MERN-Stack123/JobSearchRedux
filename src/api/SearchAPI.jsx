// src/api/SearchAPI.jsx

import axios from "axios";

const SearchAPI = {
  searchJobs: async (jobProfile, location) => {
    try {
      const response = await axios.get("https://api.example.com/jobs");
      // Replace with your API endpoint
      const jobs = response.data;

      const filteredJobs = jobs.filter(
        (job) =>
          job.jobProfile.toLowerCase().includes(jobProfile.toLowerCase()) &&
          job.location.toLowerCase().includes(location.toLowerCase())
      );

      return filteredJobs;
    } catch (error) {
      throw new Error("Failed to fetch jobs");
    }
  },
};

export default SearchAPI;
