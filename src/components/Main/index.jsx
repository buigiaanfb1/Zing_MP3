import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Album from '../Album';
import Header from '../Header';
import { useStyles } from './styles';

const Main = () => {
  const classes = useStyles();
  const [y, setY] = useState(false);
  const albums = useSelector((state) => state.shareStore.albums);

  // Xác định vị trí người dùng đang đứng bằng như sau
  const handleScroll = (e) => {
    // in ra 1 4 10,....
    let current = e.target.scrollTop;
    current > 0 ? setY(true) : setY(false);
  };

  // render album
  const handleRenderAlbums = () => {
    if (albums) {
      return <Album albums={albums} />;
    }
  };

  return (
    <div className={classes.container}>
      <Header isScrollMoreThanZero={y} />
      <div className={classes.containerContent}>
        <div className={classes.bodyScroll} onScroll={handleScroll}>
          {handleRenderAlbums()}
        </div>
      </div>
    </div>
  );
};

export default Main;
