import React, { useEffect, useState } from 'react';
import Album from '../Album';
import Header from '../Header';
import { useStyles } from './styles';

const Main = () => {
  const classes = useStyles();
  const [y, setY] = useState(false);

  // Xác định vị trí người dùng đang đứng bằng như sau
  const handleScroll = (e) => {
    // in ra 1 4 10,....
    let current = e.target.scrollTop;
    current > 0 ? setY(true) : setY(false);
  };

  return (
    <div className={classes.container}>
      <Header isScrollMoreThanZero={y} />
      <div className={classes.containerContent}>
        <div className={classes.bodyScroll} onScroll={handleScroll}>
          <Album />
          <Album />
          <Album />
          <Album />
          <Album />
        </div>
      </div>
    </div>
  );
};

export default Main;
