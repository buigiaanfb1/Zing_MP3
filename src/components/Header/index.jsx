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
import * as mmb from 'music-metadata-browser';

const Header = ({ isScrollMoreThanZero }) => {
  console.log('header');
  const classes = useStyles();
  const { res: user } = getUser();
  let parseResults = [];

  const loginWithProvider = () => {
    login();
  };

  const parseFile = async (file) => {
    console.log(`Parsing file "${file.name}" of type ${file.type}`);
    return mmb.parseBlob(file, { native: true }).then((metadata) => {
      console.log(`Completed parsing of ${file.name}:`, metadata);
      return metadata;
    });
  };

  const handleFileChange = async (e) => {
    for (const file of e.target.files) {
      const parseResult = {
        file: file,
      };
      parseResults.push(parseResult);
      try {
        const metadata = await parseFile(file);
        // Update GUI
        console.log(metadata);
      } catch (err) {}
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
        <div className={classes.iconContainer}>
          <CloudUploadOutlinedIcon className={classes.icon} />
          <input type="file" onChange={handleFileChange} />
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
