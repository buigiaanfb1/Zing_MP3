import React from 'react';
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

const Header = ({ isScrollMoreThanZero }) => {
  console.log('header');
  const classes = useStyles();
  const { res: user } = getUser();

  const loginWithProvider = () => {
    login();
  };
  // check xem logged chưa, để hiển thị ảnh
  const handleLoggedUser = () => {
    if (user) {
      return (
        <Link to="/mymusic">
          <img src={user.photoURL} alt="avatar" className={classes.avatar} />
        </Link>
      );
    } else {
      return (
        <img
          src={defaultAvatar}
          alt="avatar"
          className={classes.avatar}
          onClick={() => loginWithProvider()}
        />
      );
    }
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
      <div className={classes.right}>
        <div className={classes.iconContainer}>
          <SettingsIcon className={classes.icon} />
        </div>
        <div className={classes.iconContainer}>
          <CloudUploadOutlinedIcon className={classes.icon} />
        </div>
        <div className={classes.iconContainer}>{handleLoggedUser()}</div>
      </div>
    </div>
  );
};

export default Header;
