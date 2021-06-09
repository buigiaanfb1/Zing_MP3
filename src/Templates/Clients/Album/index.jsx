import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { Grid, Typography } from '@material-ui/core';
import pic from '../../../assets/images/600x600.jpeg';
import { getDocument } from '../../../firebase/tools/getDocument';
import Song from './modules/Song';
import { SELECTED_SONG, SELECTED_ALBUM } from './modules/constants';
import { useDispatch, useSelector } from 'react-redux';

const Album = (props) => {
  const id = props.match.params.id;
  console.log('Album re-render');
  const classes = useStyles();
  const [songCurrent, setSongCurrent] = useState(null);
  const [render, setRender] = useState(1);
  // render lần đầu và duy nhất 1 lần
  const [albumFirst, setAlbumFirst] = useState(null);
  const dispatch = useDispatch();
  // get album từ store
  const album = useSelector((state) => state.shareStore.selectedAlbum);

  console.log(albumFirst);
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
    const res = await getDocument('albums', id);
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
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item lg={3} md={4}>
            <img
              src={albumFirst.cover}
              alt=""
              width="100%"
              className={classes.img}
            />
            <div className={classes.containerDescription}>
              <Typography className={classes.titleAlbum}>
                {albumFirst.title}
              </Typography>
            </div>
          </Grid>
          <Grid item lg={9} md={8}>
            {albumFirst.songs.map((song, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleTwoDispatch(song, song.title)}
                >
                  <Song song={song} />
                </div>
              );
            })}
          </Grid>
        </Grid>
      </div>
    );
  };

  // render những lần tiếp theo theo data từ redux
  const handleRenderNextTime = () => {
    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item lg={3} md={4}>
            <img
              src={album.cover}
              alt=""
              width="100%"
              className={classes.img}
            />
            <Typography className={classes.titleAlbum}>
              {album.title}
            </Typography>
          </Grid>
          <Grid item lg={9} md={8}>
            {album.songs.map((song, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleDispatchSong(song, song.title)}
                >
                  <Song song={song} />
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
    <div className={`${classes.container} ${classes.bodyScroll}`}>
      {handleRenderSongs()}
    </div>
  );
};

export default Album;
