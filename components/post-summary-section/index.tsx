import React from "react";
import styles from "./post-summary.module.scss";
import Grid from "@material-ui/core/Grid";
import SummaryCard from "./summary-card";

export default function PostSummarySection() {
  return (
    <div className={styles.section}>
      <Grid container spacing={1} className={styles.grid}>
        <Grid item xs={12} sm={6} lg={4}>
          <SummaryCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SummaryCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SummaryCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SummaryCard />
        </Grid>
      </Grid>
    </div>
  );
}
