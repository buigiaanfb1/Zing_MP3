import React from 'react';
import QueueMusicOutlinedIcon from '@material-ui/icons/QueueMusicOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_QUEUE, CLOSE_QUEUE } from '../../redux/action/action';
import { makeStyles } from '@material-ui/core';
import PopOver from '../PopOver';

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
    position: 'relative',
  },

  icon: {
    width: '24px',
    height: '24px',
  },
  popOver: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-85%, -50%)',
    zIndex: '10',
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
      <div className={classes.popOver}>
        <PopOver text="Danh sách phát" />
      </div>
    </div>
  );
};

export default OpenQueue;
