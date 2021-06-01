import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchBar from '../SearchBar';
import SettingsIcon from '@material-ui/icons/Settings';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import avatar from '../../assets/images/avatar.png';

const Header = ({ isScrollMoreThanZero }) => {
  const classes = useStyles();
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
          <CloudUploadIcon className={classes.icon} />
        </div>
        <img src={avatar} alt="avatar" className={classes.avatar} />
      </div>
    </div>
  );
};

export default Header;
