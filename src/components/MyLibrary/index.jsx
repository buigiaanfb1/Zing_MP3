import { Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import Songs from './Songs';
import { getUser } from '../../firebase/tools/getUser';
import { useStyles } from './styles';
import MyPlaylists from '../MyPlaylists';

const MyLibrary = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        <div className={classes.menuItems}>
          <Typography className={classes.menuSelected}>Bài hát</Typography>
          <Typography
            className={classes.menuNotSelected}
            style={{ cursor: 'not-allowed' }}
          >
            Playlist
          </Typography>
          <Typography
            className={classes.menuNotSelected}
            style={{ cursor: 'not-allowed' }}
          >
            Tải lên
          </Typography>
        </div>
      </div>
      <Songs />
      <MyPlaylists />
    </div>
  );
};

export default MyLibrary;
