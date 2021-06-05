import { Link, Paper, Typography } from "@material-ui/core";
import React from "react";

export default function About() {
  return (
    <Paper>
      <Typography variant="h4" color="primary">
        About this Template
      </Typography>
      <Typography variant="subtitle2">
        This NextJs Template has NextJs Configured with Material UI and SCSS!
      </Typography>
      <Link href="/">Back to Main</Link>
    </Paper>
  );
}
