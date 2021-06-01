import React from 'react';
import QueueMusicOutlinedIcon from '@material-ui/icons/QueueMusicOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_QUEUE, CLOSE_QUEUE } from '../../redux/action/action';
const OpenQueue = () => {
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
    <div onClick={() => handleOpenQueue()}>
      <QueueMusicOutlinedIcon />
    </div>
  );
};

export default OpenQueue;
