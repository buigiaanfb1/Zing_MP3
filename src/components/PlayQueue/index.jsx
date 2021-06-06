import { Typography } from '@material-ui/core';
import React from 'react';
import AccessAlarmsOutlinedIcon from '@material-ui/icons/AccessAlarmsOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import defaultCoverSong from '../../assets/images/defaultCoverSong.png';
import { useStyles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { SELECTED_SONG } from '../../Templates/Clients/Album/modules/constants';

const PlayerQueue = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const album = useSelector((state) => state.shareStore.selectedAlbum);

  const handleDispatchSong = (song) => {
    console.log(song);
    dispatch({
      type: SELECTED_SONG,
      payload: song,
    });
  };

  const handleRenderPlayerQueue = () => {
    if (album) {
      return album.songs?.map((song, index) => {
        return (
          <div
            className={`${
              song?.isSelected
                ? classes.musicContainerSelected
                : classes.musicContainer
            }`}
            key={index}
            onClick={() => handleDispatchSong(song)}
          >
            <img
              src={song.picture ? song.picture : defaultCoverSong}
              className={classes.img}
            />
            <div className={classes.containerTitleAuthor}>
              <Typography className={classes.title}>
                {song.title.length > 30
                  ? song.title.substr(0, 27) + '...'
                  : song.title}
              </Typography>
              <Typography className={classes.author}>{song.artist}</Typography>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className={`${classes.container}`}>
      <div className={`${classes.wrapper} ${classes.bodyScroll}`}>
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
        {handleRenderPlayerQueue()}
      </div>
    </div>
  );
};

export default PlayerQueue;
