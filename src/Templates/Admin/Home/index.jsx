import { Button, TextField, Typography, withStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { setStorage } from '../../../firebase/tools/setStorage';
import { setCollection } from '../../../firebase/tools/setCollection';
import { parseSongMp3 } from '../../../common/handleParseFile';
import { useStyles } from './styles';
import notify from '../../../common/toastify';
import { getUser } from '../../../firebase/tools/getUser';
import { useMemo } from 'react';
import history from '../../../history';

const Home = () => {
  useMemo(() => {
    const { res } = getUser();
    if (res.email !== 'buigiaanfb1@gmail.com') {
      history.push('/');
    }
  });
  const classes = useStyles();
  const [content, setContent] = useState({
    albumTitle: '',
    cover: null,
    songs: [],
  });
  const { uploadMusicAdmin, uploadCoverAlbum, uploadImageSong } = setStorage();
  const { addDoc } = setCollection('albums');
  const types = ['image/png', 'image/jpeg'];

  const handleAlbumTitleChange = (e) => {
    let value = e.target.value;
    setContent({
      ...content,
      albumTitle: value,
    });
  };

  const handleImageChange = async (e) => {
    const selected = e.target.files;
    if (selected && types.includes(selected[0].type)) {
      setContent({
        ...content,
        cover: selected[0],
      });
    } else {
      return;
    }
  };

  const handleFileChange = async (e) => {
    const files = e.target.files;
    const filesArray = [];
    // loop an object
    Object.keys(files).map((key) => {
      filesArray.push(files[key]);
    });
    setContent({
      ...content,
      songs: filesArray,
    });
  };

  const handleSubmit = async () => {
    if (content.albumTitle && content.cover && content.songs) {
      notify(`Đang upload lên Firebase!`);
      let arrSongs = [];
      let titlePath = content.albumTitle
        .slice(0)
        .toLowerCase()
        .split(' ')
        .join('-');

      // lấy url để add vào doc
      const { url: coverUrl } = await uploadCoverAlbum(
        content.cover,
        titlePath
      );
      for (const file of content.songs) {
        // lấy url để add vào doc
        const { url: songUrl } = await uploadMusicAdmin(file, titlePath);
        const info = await parseSongMp3(file);
        if (info?.picture) {
          const { url: imgSongUrl } = await uploadImageSong(
            file,
            info.picture,
            titlePath
          );
          document.getElementById('cover').src = imgSongUrl;
          arrSongs.push({ ...info, song: songUrl, picture: imgSongUrl });
        } else {
          arrSongs.push({ ...info, song: songUrl, picture: '' });
        }
      }
      // add Doc
      const res = await addDoc({
        title: content.albumTitle,
        cover: coverUrl,
        songs: arrSongs,
      });
      notify(`Bravoooo! Đã tải lên!`);
    } else {
      return;
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <div className={classes.item}>
          <Typography className={classes.title}>Tên Album</Typography>
          <TextField
            name="albumTitle"
            variant="outlined"
            size="small"
            label="Tên album"
            onChange={handleAlbumTitleChange}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssLabel,
              },
            }}
            InputProps={{
              classes: {
                root: classes.notchedOutline,
                focused: classes.notchedOutline,
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
        </div>
        <div className={classes.item}>
          <Typography className={classes.title}>Ảnh</Typography>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className={classes.item}>
          <Typography className={classes.title}>Bài hát</Typography>
          <input type="file" multiple="multiple" onChange={handleFileChange} />
        </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleSubmit()}
      >
        Thêm
      </Button>
      <img alt="" id="cover" />
    </div>
  );
};

export default Home;
