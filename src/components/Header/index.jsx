import React, { useState } from 'react';
import { login } from '../../firebase/tools/useLogin';
import { useStyles } from './styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchBar from '../SearchBar';
import SettingsIcon from '@material-ui/icons/Settings';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import defaultAvatar from '../../assets/images/defaultAvatar.png';
import { getUser } from '../../firebase/tools/getUser';
import { Link } from 'react-router-dom';
import { setStorage } from '../../firebase/tools/setStorage';
import { setCollection } from '../../firebase/tools/setCollection';
import { timestamp } from '../../firebase/config';
import { checkDocIfExist } from '../../firebase/tools/checkDoc';
import { updateDoc } from '../../firebase/tools/updateDoc';

const Header = ({ isScrollMoreThanZero }) => {
  console.log('header');
  const classes = useStyles();
  const { res: user } = getUser();

  const loginWithProvider = () => {
    login();
  };

  const handleFileChange = async (e) => {
    const type = 'audio/mpeg';
    const typeOfFile = e.target.files[0].type;
    const file = e.target.files[0];
    if (type === typeOfFile) {
      // upload file mp3 lên firebase
      const { uploadMusic, filePath } = setStorage();
      // Kiểm tra người mới hay người cũ.
      const res = await checkDocIfExist('playlists', user.uid);
      console.log(res);
      // lấy link nhạc từ firestore
      const { url } = await uploadMusic(file);
      // Check < 1 là người mới
      if (res.length < 1) {
        console.log('newbie');
        // Chưa có playlist (người mới) thì tự tạo 1 cái.
        if (url) {
          const { addDoc } = setCollection('playlists');
          const res = addDoc({
            userId: user.uid,
            userName: user.displayName,
            playlists: {
              free: [url],
            },
            createdAt: timestamp(),
          });
        }
        // Có rồi thi update
      } else {
        // Copy ra địa chỉ mới
        let dataArray = [...res];
        // Get id của cái document
        let id = dataArray[0].id;
        // Thêm bài hát vào
        dataArray[0].playlists.free.push(url);
        let data = dataArray[0];
        // Update lại
        await updateDoc('playlists', id, data);
      }
    }
  };
  // Dành cho user chưa login
  const handleUserNotLogged = () => {
    return (
      <div className={classes.right}>
        <div
          className={classes.iconContainer}
          onClick={() => loginWithProvider()}
        >
          <SettingsIcon className={classes.icon} />
        </div>
        <div
          className={classes.iconContainer}
          onClick={() => loginWithProvider()}
        >
          <CloudUploadOutlinedIcon className={classes.icon} />
        </div>
        <div className={classes.iconContainer}>
          <img
            src={defaultAvatar}
            alt="avatar"
            className={classes.avatar}
            onClick={() => loginWithProvider()}
          />
        </div>
      </div>
    );
  };
  // check xem logged chưa, để hiển thị ảnh
  const handleLoggedUser = () => {
    return (
      <div className={classes.right}>
        <div className={classes.iconContainer}>
          <SettingsIcon className={classes.icon} />
        </div>
        <label for="upload">
          <div className={classes.iconContainer}>
            <CloudUploadOutlinedIcon className={classes.icon} />
            <input
              type="file"
              style={{ display: 'none' }}
              id="upload"
              onChange={handleFileChange}
            />
          </div>
        </label>
        <div className={classes.iconContainer}>
          <Link to="/mymusic">
            <img src={user.photoURL} alt="avatar" className={classes.avatar} />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`${classes.header} ${
        isScrollMoreThanZero ? classes.backgroundMoreThanZero : ''
      }`}
    >
      <div className={classes.left}>
        <div className={classes.direct}>
          <ArrowBackIosIcon className={classes.directIcon} />
          <ArrowForwardIosIcon className={classes.directIcon} />
        </div>
        <SearchBar />
      </div>
      {user ? handleLoggedUser() : handleUserNotLogged()}
    </div>
  );
};

export default Header;
