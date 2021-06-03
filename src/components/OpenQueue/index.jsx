import React from 'react';
import QueueMusicOutlinedIcon from '@material-ui/icons/QueueMusicOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_QUEUE, CLOSE_QUEUE } from '../../redux/action/action';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    cursor: 'pointer',
    height: '30px',
    width: '30px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0.6rem',
    backgroundColor: 'var(--icon-bg)',
  },

  icon: {
    width: '24px',
    height: '24px',
  },
}));
const OpenQueue = () => {
  const classes = useStyles();
  const openQueue = useSelector((state) => state.shareStore.openQueue);
  const dispatch = useDispatch();

  const handleOpenQueue = () => {
    if (openQueue !== null) {
      if (openQueue) {
        dispatch({
          type: CLOSE_QUEUE,
        });
      } else {
        dispatch({
          type: OPEN_QUEUE,
        });
      }
    }
  };
  return (
    <div onClick={() => handleOpenQueue()} className={classes.iconContainer}>
      <QueueMusicOutlinedIcon className={classes.icon} />
    </div>
  );
};

export default OpenQueue;
