import { Button, TextField, Typography, withStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { setStorage } from '../../../firebase/tools/setStorage';
import { setCollection } from '../../../firebase/tools/setCollection';
import { parseSongMp3 } from '../../../common/handleParseFile';
import { useStyles } from './styles';

const Home = () => {
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
      console.log('Starting');
      const arrSongs = [];
      let titlePath = content.albumTitle
        .slice(0)
        .toLowerCase()
        .split(' ')
        .join('-');

      // lấy url để add vào doc
      const { url: coverUrl } = await uploadCoverAlbum(content.cover);
      for (const file of content.songs) {
        // lấy url để add vào doc
        const { url: songUrl } = await uploadMusicAdmin(file, titlePath);
        const info = await parseSongMp3(file);
        const { url: imgSongUrl } = await uploadImageSong(
          info.picture,
          titlePath
        );
        arrSongs.push({ ...info, song: songUrl, picture: imgSongUrl });
      }
      // add Doc
      const res = await addDoc({
        title: content.albumTitle,
        cover: coverUrl,
        songs: arrSongs,
      });
      console.log('Success');
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
    </div>
  );
};

export default Home;
