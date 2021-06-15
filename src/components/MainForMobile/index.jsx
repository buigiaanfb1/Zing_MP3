import React from 'react';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
const MainForMobile = ({ albums }) => {
  const classes = useStyles();
  console.log(albums);
  const handleRenderAlbum = () => {
    if (albums) {
      return albums.map((album) => {
        return (
          <Grid item xs={6}>
            <Link to={`/album/${album.id}`} className={classes.a}>
              <div className={classes.containerImg}>
                <img src={album.cover} className={classes.img} />
              </div>
              <div className={classes.containerTitle}>
                <Typography className={classes.title}>{album.title}</Typography>
              </div>
            </Link>
          </Grid>
        );
      });
    }
  };
  return (
    <div className={`${classes.root} ${classes.container}`}>
      <Grid container spacing={3}>
        {handleRenderAlbum()}
      </Grid>
    </div>
  );
};

export default MainForMobile;
