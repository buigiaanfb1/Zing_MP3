import { Typography } from '@material-ui/core';
import React, { useRef } from 'react';
import album1 from '../../assets/images/album1.jpeg';
import albumDefault from '../../assets/images/album_default.png';
import album2 from '../../assets/images/album2.jpeg';
import album3 from '../../assets/images/album3.jpeg';
import album4 from '../../assets/images/album4.jpeg';
import album5 from '../../assets/images/album5.jpeg';
import Slider from 'react-slick';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useStyles } from './styles';

const MyPlaylists = () => {
  const classes = useStyles();
  const ref = useRef({});

  // next, previous button initial for slick-slider
  const next = () => {
    ref.current.slickNext();
  };
  const previous = () => {
    ref.current.slickPrev();
  };

  // icon arrow for slick-slider
  const ArrowLeft = (props) => (
    <ArrowBackIosOutlinedIcon
      onClick={previous}
      className={classes.arrowLeft}
    />
  );
  const ArrowRight = (props) => (
    <ArrowForwardIosOutlinedIcon
      onClick={next}
      className={classes.arrowRight}
    />
  );

  // initial slick-slider
  const settings = {
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    infinite: false,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const handleRenderPlaylists = () => {
    return (
      <div className={classes.containerPlaylist}>
        <div className={classes.containerImagePlaylist}>
          <img src={albumDefault} className={classes.imagePlaylist} />
          <div className={classes.overlay}>
            <div className={classes.tools}>
              <FavoriteBorderOutlinedIcon className={classes.icon} />
              <div className={classes.iconPlayContainer}>
                <PlayArrowIcon className={classes.iconPlay} />
              </div>
              <MoreHorizOutlinedIcon className={classes.icon} />
            </div>
          </div>
        </div>
        {/* <Link to={`/album/${album.id}`} className={classes.a}> */}
        <div className={classes.containerTitle}>
          <Typography className={classes.title}>asd</Typography>
        </div>
        {/* </Link> */}
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Typography className={classes.tag}>Playlist</Typography>
        <Slider {...settings} ref={ref} className={classes.initialSlick}>
          {handleRenderPlaylists()}
          {handleRenderPlaylists()}
          {handleRenderPlaylists()}
          {handleRenderPlaylists()}
          {handleRenderPlaylists()}
          {handleRenderPlaylists()}
          {handleRenderPlaylists()}
        </Slider>
      </div>
    </div>
  );
};

export default MyPlaylists;
