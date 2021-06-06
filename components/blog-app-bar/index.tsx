import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./blog-app-bar.module.scss";

export interface BlogAppBarProps {
  title: string;
}

export default function BlogAppBar({ title }: BlogAppBarProps) {
  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        <div className={styles.appBarWrapper}>
          <IconButton
            edge="start"
            className={styles.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            {title}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
