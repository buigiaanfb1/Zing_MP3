import React from 'react';
import { useStyles } from './styles';
import QueueMusicOutlinedIcon from '@material-ui/icons/QueueMusicOutlined';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getDocument } from '../../firebase/tools/getDocument';
import { updateDoc } from '../../firebase/tools/updateDoc';
import { getUser } from '../../firebase/tools/getUser';
import notify from '../../common/toastify';
const PlaylistItem = ({ song, handleCloseParent }) => {
  const classes = useStyles();
  const userInfo = useSelector((state) => state.shareStore.userInfo);

  const handleAddToPlaylist = async (playlistTitle, playlistId, song) => {
    delete song.isSelected;
    if (userInfo.id) {
      const userDoc = await getDocument('users', userInfo.id);
      let arrSong = [];
      const userPlaylistCopy = { ...userDoc };
      for (let userPlaylist of userPlaylistCopy.playlists) {
        if (userPlaylist.id === playlistId) {
          userPlaylist.songs = [...userPlaylist.songs, song];
          arrSong = [...userPlaylist.songs];
          break;
        }
      }
      // call api lên firebase để update
      // get doc về trước
      const playlistGet = await getDocument('playlists', playlistId);
      // copy ra tránh mutate
      let playlistCopy = { ...playlistGet };
      // thêm song vào
      playlistCopy.songs = [...arrSong];
      // update
      await updateDoc('users', userInfo.id, userPlaylistCopy);
      await updateDoc('playlists', playlistCopy.id, playlistCopy);
      handleCloseParent();
      notify(`Thêm vào playlist ${playlistTitle} thành công`);
    }
  };

  const handleRenderPlaylistTitle = () => {
    if (userInfo) {
      return userInfo.playlists.map((playlist) => {
        return (
          <div
            className={classes.container}
            onClick={() =>
              handleAddToPlaylist(playlist.title, playlist.id, song)
            }
          >
            <QueueMusicOutlinedIcon className={classes.icon} />
            <Typography className={classes.title}>{playlist.title}</Typography>
          </div>
        );
      });
    } else {
      return null;
    }
  };

  return handleRenderPlaylistTitle();
};

export default PlaylistItem;
