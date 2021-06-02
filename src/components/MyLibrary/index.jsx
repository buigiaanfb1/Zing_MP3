import { Typography } from '@material-ui/core';
import React from 'react';
import Songs from './Songs';
import { useStyles } from './styles';

const MyLibrary = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        <div className={classes.menuItems}>
          <Typography className={classes.menuSelected}>Bài hát</Typography>
          <Typography className={classes.menuNotSelected}>Playlist</Typography>
          <Typography className={classes.menuNotSelected}>Tải lên</Typography>
        </div>
      </div>
      <Songs />
    </div>
  );
};

export default MyLibrary;
