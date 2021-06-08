import React, { useState, useEffect } from 'react';
import { login } from '../../firebase/tools/useLogin';
import { useStyles } from './styles';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import CallMadeIcon from '@material-ui/icons/CallMade';
import SearchBar from '../SearchBar';
import SettingsIcon from '@material-ui/icons/Settings';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import defaultAvatar from '../../assets/images/defaultAvatar.png';
import { getUser } from '../../firebase/tools/getUser';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { uploadMusicPrivate } from '../../firebase/tools/uploadMusicPrivate';
import PopOver from '../PopOver';
import notify from '../../common/toastify';

const Header = ({ isScrollMoreThanZero }) => {
  console.log('header');
  const classes = useStyles();
  let history = useHistory();
  const [goBack, setGoBack] = useState(null);
  const { res: user } = getUser();

  useEffect(() => {
    if (history.location.pathname !== '/') {
      // history.goBack();
      setGoBack(true);
    } else {
      setGoBack(false);
      return;
    }
  }, []);

  const loginWithProvider = () => {
    login();
  };

  const handleGoBack = () => {
    if (history.location.pathname !== '/') {
      history.goBack();
      setGoBack(true);
    } else {
      setGoBack(false);
      return;
    }
  };

  const handleFileChange = async (e) => {
    const type = 'audio/mpeg';
    const files = e.target.files;
    notify(`${files.length} file đang được tải lên!`);
    for (let file of files) {
      const typeOfFile = file.type;
      if (type === typeOfFile) {
        await uploadMusicPrivate(file, user.uid, user.displayName);
      }
    }
    notify(`${files.length} file tải lên thành công!`);
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
        <label htmlFor="upload">
          <div className={classes.iconContainer}>
            <CloudUploadOutlinedIcon className={classes.icon} />
            <input
              type="file"
              style={{ display: 'none' }}
              multiple="multiple"
              id="upload"
              onChange={handleFileChange}
            />
            <div className={classes.popOver}>
              <PopOver text="Tải lên" />
            </div>
          </div>
        </label>
        <div className={classes.iconContainer}>
          <SettingsIcon className={classes.icon} />
          <div className={classes.popOver}>
            <PopOver text="Cài đặt" />
          </div>
        </div>
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
          <CallReceivedIcon
            className={`${classes.directIcon} ${
              goBack ? classes.directIconCan : ''
            }`}
            onClick={handleGoBack}
          />
          <CallMadeIcon className={classes.directIcon} />
        </div>
        <SearchBar />
      </div>
      {user ? handleLoggedUser() : handleUserNotLogged()}
    </div>
  );
};

export default Header;
