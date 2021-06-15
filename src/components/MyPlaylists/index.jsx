import { Typography } from '@material-ui/core';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import albumDefault from '../../assets/images/album_default.png';
import Slider from 'react-slick';
import CreatePlaylistModal from '../CreatePlaylistModal';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { useStyles } from './styles';

const MyPlaylists = () => {
  const classes = useStyles();
  const ref = useRef({});
  const userInfo = useSelector((state) => state.shareStore.userInfo);
  // const dispatch = useDispatch();

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
    slidesToScroll: 3,
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
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const handleRenderPlaylists = () => {
    if (userInfo && userInfo.playlists.length > 0) {
      return userInfo.playlists.map((playlist, index) => {
        return (
          <div className={classes.containerPlaylist} key={index}>
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
            <Link to={`/playlist/${playlist.id}`} className={classes.a}>
              <div className={classes.containerTitle}>
                <Typography className={classes.title}>
                  {playlist.title}
                </Typography>
              </div>
            </Link>
          </div>
        );
      });
    }
  };

  const handleRenderCreatePlaylist = () => {
    return (
      <div className={classes.containerPlaylist}>
        <div className={classes.emptyPlaylist}>
          <CreatePlaylistModal />
          {/* <AddOutlinedIcon className={classes.addPlaylistIcon} />
          <span className={classes.text}>Tạo playlist mới</span> */}
        </div>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Typography className={classes.tag}>Playlist</Typography>
        <Slider {...settings} ref={ref} className={classes.initialSlick}>
          {handleRenderCreatePlaylist()}
          {handleRenderPlaylists()}
        </Slider>
      </div>
    </div>
  );
};

export default MyPlaylists;
