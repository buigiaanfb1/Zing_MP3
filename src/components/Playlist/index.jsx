import { Typography, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultCoverSong from '../../assets/images/defaultCoverSong.png';
import { getDocument } from '../../firebase/tools/getDocument';
import {
  SELECTED_ALBUM,
  SELECTED_SONG,
} from '../../Templates/Clients/Album/modules/constants';
import Song from '../Song';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../common/animation';
import { useStyles } from './styles';
import Header from '../Header';

const Playlist = (props) => {
  const id = props.match.params.id;
  const classes = useStyles();
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

  useEffect(() => {
    handleSaveAlbumLocalStorage();
  }, [album]);

  const handleSaveAlbumLocalStorage = () => {
    if (album) {
      localStorage.setItem('zmp3_queue', JSON.stringify(album));
    }
  };

  const handleTwoDispatch = (song, title) => {
    // Dispatch 2 cái khi click mới làm ( để tránh khi người dùng )
    // vừa vào nó load lại mất playlist @@
    // @@ code tới đây chả biết đang làm gì @@ 5h43 AM
    handleDispatchAlbum();
    handleDispatchSong(song, title);
  };

  // fetch album
  const handleGetAlbum = async () => {
    // nếu mà khác id thì dispatch không thì thui giữ nguyên
    const res = await getDocument('playlists', id);
    // dữ liệu xài riêng cho component
    setAlbumFirst(res);
  };

  const handleDispatchAlbum = () => {
    dispatch({
      type: SELECTED_ALBUM,
      payload: albumFirst,
    });
    // tăng lên 2 để tạo điều kiện dòng 64
    setRender(render + 1);
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

  // sử dụng data của riêng component để render
  const handleRenderForTheFirstTime = () => {
    return (
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className={classes.root}>
          <Grid container spacing={5}>
            <Grid item lg={3} md={4} sm={12} xs={12}>
              <img
                src={albumFirst.cover ? albumFirst.cover : defaultCoverSong}
                alt=""
                width="100%"
                className={classes.img}
              />
              <div className={classes.containerDescription}>
                <Typography className={classes.titleAlbum}>
                  {albumFirst.title}
                </Typography>
                <Typography className={classes.createdBy}>
                  Tạo bởi{' '}
                  <span className={classes.userName}>
                    {albumFirst.userName}
                  </span>
                </Typography>
                <Typography className={classes.createdBy}>Công khai</Typography>
              </div>
            </Grid>
            <Grid item lg={9} md={8} sm={12} xs={12}>
              {albumFirst.songs.map((song, index) => {
                return (
                  <div
                    key={index}
                    onDoubleClick={() => handleTwoDispatch(song, song.title)}
                  >
                    <Song song={song} handleDispatchSong={handleTwoDispatch} />
                  </div>
                );
              })}
            </Grid>
          </Grid>
        </div>
      </motion.div>
    );
  };

  // render những lần tiếp theo theo data từ redux
  const handleRenderNextTime = () => {
    return (
      <div className={classes.root}>
        <Grid container spacing={5}>
          <Grid item lg={3} md={4} sm={12} xs={12}>
            <img
              src={albumFirst.cover ? albumFirst.cover : defaultCoverSong}
              alt=""
              width="100%"
              className={classes.img}
            />
            <div className={classes.containerDescription}>
              <Typography className={classes.titleAlbum}>
                {album.title}
              </Typography>
              <Typography className={classes.titleAlbum}>
                Tạo bởi{album.userName}
              </Typography>
            </div>
          </Grid>
          <Grid item lg={9} md={8} sm={12} xs={12}>
            {album.songs.map((song, index) => {
              return (
                <div
                  key={index}
                  onDoubleClick={() => handleDispatchSong(song, song.title)}
                >
                  <Song song={song} handleDispatchSong={handleDispatchSong} />
                </div>
              );
            })}
          </Grid>
        </Grid>
      </div>
    );
  };

  const handleRenderSongs = () => {
    // chạy khi mới load component lần đầu
    if (albumFirst && render <= 1) {
      return handleRenderForTheFirstTime();
    }
    // chạy những lần còn lại @@
    else {
      //  lớn hơn 1 vì nếu bé hơn thì album trên
      // redux vẫn còn nó sẽ hiện 1 cái rùi mới có data
      // mới xấu trang nên thêm render > 1
      if (album && render > 1) {
        return handleRenderNextTime();
      }
    }
  };

  return (
    <>
      <Header />
      <div className={`${classes.container} ${classes.bodyScroll}`}>
        {handleRenderSongs()}
        <div style={{ height: '90px' }}></div>
      </div>
    </>
  );
};

export default Playlist;
