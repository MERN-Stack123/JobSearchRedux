import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

// const useStyles = makeStyles({
//   root: {
//     marginBottom: "16px",
//   },
// });

const StyledCard = styled({
  root: {
    marginBottom: "16px",
  },
});

const JobCard = ({ job }) => {
  return (
    <StyledCard className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="div">
          {job.jobProfile}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {job.location}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default JobCard;
