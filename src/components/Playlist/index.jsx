import { Typography, Grid } from '@material-ui/core';
import React from 'react';
import pic from '../../assets/images/600x600.jpeg';
import { useStyles } from './styles';

const Playlist = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.container} ${classes.bodyScroll}`}>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item lg={3} md={4}>
            <img src={pic} alt="" width="100%" className={classes.img} />
            <div className={classes.containerDescription}>
              <Typography className={classes.titleAlbum}>dasdas</Typography>
            </div>
          </Grid>
          <Grid item lg={9} md={8}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Playlist;
