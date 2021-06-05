import React, { useRef } from 'react';
import Slider from 'react-slick';
import { useStyles } from './styles';
import album1 from '../../assets/images/album1.jpeg';
import album2 from '../../assets/images/album2.jpeg';
import album3 from '../../assets/images/album3.jpeg';
import album4 from '../../assets/images/album4.jpeg';
import album5 from '../../assets/images/album5.jpeg';
import { Typography } from '@material-ui/core';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Link } from 'react-router-dom';

const Album = ({ albums }) => {
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

  // render methods
  const handleRenderAlbum = () => {
    return albums.map((album) => {
      return (
        <div className={classes.containerAlbum}>
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
          <Link to={`/album/${album.id}`}>
            <div className={classes.containerTitle}>
              <Typography className={classes.title}>{album.title}</Typography>
            </div>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.titleAll}>Gợi Ý Cho Hôm Nay</Typography>
      <Slider {...settings} ref={ref} className={classes.initialSlick}>
        {handleRenderAlbum()}
        <div className={classes.containerAlbum}>
          <div className={classes.containerImageAlbum}>
            <img src={album1} className={classes.imageAlbum} />
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
            <Typography className={classes.title}>
              V-Pop Nhạc Mới Nổi Bật
            </Typography>
          </div>
        </div>
        <div className={classes.containerAlbum}>
          <div className={classes.containerImageAlbum}>
            <img src={album2} className={classes.imageAlbum} />
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
            <Typography className={classes.title}>
              V-Pop Nhạc Mới Nổi Bật
            </Typography>
          </div>
        </div>
        <div className={classes.containerAlbum}>
          <div className={classes.containerImageAlbum}>
            <img src={album2} className={classes.imageAlbum} />
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
            <Typography className={classes.title}>
              V-Pop Nhạc Mới Nổi Bật
            </Typography>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default React.memo(Album);
