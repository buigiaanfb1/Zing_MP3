import { Typography } from '@material-ui/core';
import React from 'react';
import AccessAlarmsOutlinedIcon from '@material-ui/icons/AccessAlarmsOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import queue1 from '../../assets/images/queue1.jpeg';
import queue2 from '../../assets/images/queue2.jpeg';
import { useStyles } from './styles';

const PlayerQueue = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.navbar}>
          <div className={classes.textContainer}>
            <Typography className={classes.textSelected}>
              Danh sách phát
            </Typography>
            <Typography className={classes.text}>Nghe gần đây</Typography>
          </div>
          <div className={classes.containerIcon}>
            <AccessAlarmsOutlinedIcon className={classes.icon} />
          </div>
          <div className={classes.containerIcon}>
            <MoreHorizOutlinedIcon className={classes.icon} />
          </div>
        </div>
        <div className={classes.musicContainer}>
          <img src={queue1} className={classes.img} />
          <div className={classes.containerTitleAuthor}>
            <Typography className={classes.title}>Sing me to sleep</Typography>
            <Typography className={classes.author}>Alan Walker</Typography>
          </div>
        </div>
        <div className={classes.musicContainerSelected}>
          <img src={queue2} className={classes.img} />
          <div className={classes.containerTitleAuthor}>
            <Typography className={classes.title}>Until You</Typography>
            <Typography className={classes.author}>JavaScript</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerQueue;
