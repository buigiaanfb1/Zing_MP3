import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Song from '../../Song';
import { uploadMusicPrivate } from '../../../firebase/tools/uploadMusicPrivate';
import { getUser } from '../../../firebase/tools/getUser.js';
import { getDocument } from '../../../firebase/tools/getDocument.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  SELECTED_ALBUM,
  SELECTED_SONG,
} from '../../../Templates/Clients/Album/modules/constants';

const Songs = () => {
  const classes = useStyles();
  const { res: user } = getUser();
  console.log('songs render library');
  const [songCurrent, setSongCurrent] = useState(null);
  const [render, setRender] = useState(1);
  // render lần đầu và duy nhất 1 lần
  const [albumFirst, setAlbumFirst] = useState(null);
  const dispatch = useDispatch();
  // get album từ store
  const album = useSelector((state) => state.shareStore.selectedAlbum);

  useEffect(() => {
    handleGetAlbum();
  }, []);

  // handle upload file
  const handleFileChange = async (e) => {
    const type = 'audio/mpeg';
    const files = e.target.files;
    for (let file of files) {
      const typeOfFile = file.type;
      if (type === typeOfFile) {
        await uploadMusicPrivate(file, user.uid, user.displayName);
      }
    }
  };

  // fetch album
  const handleGetAlbum = async () => {
    // nếu mà khác id thì dispatch không thì thui giữ nguyên
    // if (!album) {
    const res = await getDocument('users', user.uid);
    // dữ liệu xài riêng cho component
    setAlbumFirst(res);
    // setRender(render + 1);
    // }
  };

  const handleTwoDispatch = (song, title) => {
    // Dispatch 2 cái khi click mới làm ( để tránh khi người dùng )
    // vừa vào nó load lại mất playlist @@
    // @@ code tới đây chả biết đang làm gì @@ 5h43 AM
    handleDispatchAlbum();
    handleDispatchSong(song, title);
  };

  const handleDispatchAlbum = () => {
    dispatch({
      type: SELECTED_ALBUM,
      payload: albumFirst,
    });
    // tăng lên 2 để tạo điều kiện dòng 64
    // setRender(render + 1);
  };

  // Khi onClick 1 bài hát thì sẽ dispatch lên cho mấy
  // component khác sử dụng
  // Chặn dispatch nếu click vào bài đang hát (giúp k bị re-render)
  const handleDispatchSong = (song, songTitle) => {
    if (songTitle !== songCurrent) {
      dispatch({
        type: SELECTED_SONG,
        payload: song,
      });
      setSongCurrent(songTitle);
    } else {
      return;
    }
  };

  const handleRenderSongs = () => {
    // chạy khi mới load component lần đầu
    if (albumFirst && albumFirst.songs && render <= 1) {
      return albumFirst?.songs.map((song, index) => {
        return (
          <div
            key={index}
            onDoubleClick={() => handleTwoDispatch(song, song.title)}
          >
            <Song song={song} handleDispatchSong={handleTwoDispatch} />
          </div>
        );
      });
    }
    // chạy những lần còn lại @@
    else {
      if (album && render != 1) {
        console.log(album);
        return album?.songs.map((song, index) => {
          return (
            <div
              onDoubleClick={() => handleDispatchSong(song, song.title)}
              key={index}
            >
              <Song song={song} handleDispatchSong={handleDispatchSong} />
            </div>
          );
        });
      }
    }
  };

  const handleIfNothing = () => {
    // if (render > 1) {
    return (
      <div className={classes.containerNothing}>
        <MusicNoteOutlinedIcon className={classes.icon} />
        <span className={classes.text}>
          Không có Bài hát trong thư viện nhạc cá nhân
        </span>
      </div>
    );
    // }
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Typography className={classes.tag}>Bài Hát</Typography>
        <div className={classes.right}>
          <label htmlFor="upload">
            <div className={classes.uploadContainer}>
              <CloudUploadOutlinedIcon className={classes.iconTag} />
              <Typography className={classes.upload}>TẢI LÊN</Typography>
              <input
                type="file"
                style={{ display: 'none' }}
                multiple="multiple"
                id="upload"
                onChange={handleFileChange}
              />
            </div>
          </label>
          <div className={classes.listenAllContainer}>
            <PlayArrowIcon className={classes.iconTag} />
            <Typography className={classes.listenAll}>PHÁT TẤT CẢ</Typography>
          </div>
        </div>
      </div>
      {albumFirst || album ? handleRenderSongs() : handleIfNothing()}
    </div>
  );
};

export default Songs;
