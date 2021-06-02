import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Song from '../Song';

const Songs = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Typography className={classes.tag}>Bài Hát</Typography>
        <div className={classes.right}>
          <div className={classes.uploadContainer}>
            <CloudUploadOutlinedIcon className={classes.iconTag} />
            <Typography className={classes.upload}>TẢI LÊN</Typography>
          </div>
          <div className={classes.listenAllContainer}>
            <PlayArrowIcon className={classes.iconTag} />
            <Typography className={classes.listenAll}>PHÁT TẤT CẢ</Typography>
          </div>
        </div>
      </div>
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
    </div>
  );
};

export default Songs;
