import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { Grid, Typography } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import queue1 from '../../../assets/images/queue1.jpeg';
import pic from '../../../assets/images/600x600.jpeg';
import { getDocument } from '../../../firebase/tools/getDocument';
import { parseSongImage } from '../../../common/handleParseFile';
import defaultCoverSong from '../../../assets/images/defaultCoverSong.png';

const Album = (props) => {
  const id = props.match.params.id;
  const classes = useStyles();
  let [songs, setSongs] = useState(null);

  useEffect(() => {
    handleGetAlbum();
  }, []);

  console.log(songs);

  const handleGetAlbum = async () => {
    // const res = await getDocument('albums', id);
    // setSongs(res);
    // for (const song of res.songs) {
    //   let res = await parseSongImage(song);
    //   console.log(res);
    // }
    // setSongs({
    //   ...songs,
    // })
  };

  if (songs) {
  }

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item lg={3} md={4}>
            <img src={pic} alt="" width="100%" className={classes.img} />
          </Grid>
          <Grid item lg={9} md={8}>
            <div className={classes.containerSongs}>
              <div className={classes.songs}>
                <div className={classes.songItem}>
                  <div className={classes.songNameImgAuthContainer}>
                    <img src={queue1} alt="song" />
                    <div className={classes.songNameImgAuth}>
                      <Typography className={classes.songTitle}>
                        Faded
                      </Typography>
                      <Typography className={classes.author}>Author</Typography>
                    </div>
                  </div>
                  <div className={classes.time}>
                    <Typography className={classes.timeText}>05:45</Typography>
                  </div>
                  <div className={classes.tools}>
                    <div className={classes.iconContainer}>
                      <FavoriteBorderOutlinedIcon className={classes.icon} />
                    </div>
                    <div className={classes.iconContainer}>
                      <MoreHorizOutlinedIcon className={classes.icon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.containerSongs}>
              <div className={classes.songs}>
                <div className={classes.songItem}>
                  <div className={classes.songNameImgAuthContainer}>
                    <img src={queue1} alt="song" />
                    <div className={classes.songNameImgAuth}>
                      <Typography className={classes.songTitle}>
                        Faded
                      </Typography>
                      <Typography className={classes.author}>Author</Typography>
                    </div>
                  </div>
                  <div className={classes.time}>
                    <Typography className={classes.timeText}>05:45</Typography>
                  </div>
                  <div className={classes.tools}>
                    <div className={classes.iconContainer}>
                      <FavoriteBorderOutlinedIcon className={classes.icon} />
                    </div>
                    <div className={classes.iconContainer}>
                      <MoreHorizOutlinedIcon className={classes.icon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Album;
