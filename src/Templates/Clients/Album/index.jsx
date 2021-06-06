import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { Grid } from '@material-ui/core';
import pic from '../../../assets/images/600x600.jpeg';
import { getDocument } from '../../../firebase/tools/getDocument';
import Song from './modules/Song';
import { SELECTED_SONG, SELECTED_ALBUM } from './modules/constants';
import { useDispatch, useSelector } from 'react-redux';

const Album = (props) => {
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

  const handleTwoDispatch = (song, title) => {
    // Dispatch 2 cái khi click mới làm ( để tránh khi người dùng )
    // vừa vào nó load lại mất playlist @@
    handleDispatchAlbum();
    handleDispatchSong(song, title);
  };

  // fetch album
  const handleGetAlbum = async () => {
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

  const handleRenderSongs = () => {
    // chạy khi mới load component lần đầu
    if (albumFirst && render <= 1) {
      return albumFirst.songs.map((song, index) => {
        return (
          <div onClick={() => handleTwoDispatch(song, song.title)}>
            <Song song={song} key={index} />
          </div>
        );
      });
    }
    // chạy những lần còn lại @@
    else {
      if (album) {
        console.log(album);
        return album.songs.map((song, index) => {
          return (
            <div onClick={() => handleDispatchSong(song, song.title)}>
              <Song song={song} key={index} />
            </div>
          );
        });
      }
    }
  };

  return (
    <div className={`${classes.container} ${classes.bodyScroll}`}>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item lg={3} md={4}>
            <img src={pic} alt="" width="100%" className={classes.img} />
          </Grid>
          <Grid item lg={9} md={8}>
            {handleRenderSongs()}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Album;
