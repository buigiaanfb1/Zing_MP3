import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Album from '../Album';
import Header from '../Header';
import { useStyles } from './styles';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../common/animation';

const Main = () => {
  const classes = useStyles();
  const [y, setY] = useState(false);
  const albums = useSelector((state) => state.shareStore.albums);
  const title = [
    '',
    'Gợi Ý Cho Hôm Nay',
    'Âm Nhạc Dành Cho Bạn',
    'Mixtape yêu thích',
    'Hit V-Pop Theo Năm Tháng',
    'Chill cùng R&B',
  ];

  // Xác định vị trí người dùng đang đứng bằng như sau
  const handleScroll = (e) => {
    // in ra 1 4 10,....
    let current = e.target.scrollTop;
    current > 0 ? setY(true) : setY(false);
  };

  // render album
  const handleRenderAlbums = () => {
    if (albums) {
      const length = albums.length;
      // init array
      let albumItem = [];
      // count in for loop
      let titleIndex = 0;
      let i = 0;
      return albums.map((album, index) => {
        // Mổi lần duyệt qua 1 album thì push vào
        albumItem.push(album);
        // tăng i lên
        i++;
        // Nếu i = 8 và !== 0 (vì 0 chia hết cho 8)
        if (i % 8 === 0 && i !== 0) {
          // copy ra mảng mới mới return được
          let copyAlbumItem = [...albumItem];
          // làm sạch lại mảng
          albumItem = [];
          titleIndex++;
          //
          return (
            <Album
              albums={copyAlbumItem}
              title={title[titleIndex]}
              key={index}
            />
          );
        } else if (index === length - 1) {
          titleIndex++;
          // nếu k chia hết cho 8 thì gom lại
          // rồi return từ 8 cho đến số lẻ
          let copyAlbumItem = [...albumItem];
          //
          return (
            <Album
              albums={copyAlbumItem}
              title={title[titleIndex++]}
              key={index}
            />
          );
        }
      });
    }
  };
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className={classes.container}>
        <Header isScrollMoreThanZero={y} />
        <div className={classes.containerContent}>
          <div className={classes.bodyScroll} onScroll={handleScroll}>
            {handleRenderAlbums()}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
