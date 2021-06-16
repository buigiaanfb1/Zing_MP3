import React, { useRef } from 'react';
import Slider from 'react-slick';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Link } from 'react-router-dom';

const Album = ({ albums, title }) => {
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
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 0,
          rows: 1,
          slidesPerRow: 1,
        },
      },
    ],
  };

  // render methods
  const handleRenderAlbum = () => {
    return albums.map((album, index) => {
      return (
        <Link to={`/album/${album.id}`} className={classes.a}>
          <div className={classes.containerAlbum} key={index}>
            <div className={classes.containerImageAlbum}>
              <img src={album.cover} className={classes.imageAlbum} />
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
            <div className={classes.containerTitle}>
              <Typography className={classes.title}>{album.title}</Typography>
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.titleAll}>{title}</Typography>
      <Slider {...settings} ref={ref} className={classes.initialSlick}>
        {handleRenderAlbum()}
      </Slider>
    </div>
  );
};

export default React.memo(Album);
