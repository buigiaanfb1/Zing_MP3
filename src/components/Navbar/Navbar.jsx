import React from 'react';
import { useStyles } from './styles';
import LogoDark from '../../assets/images/logo-dark.svg';
import LogoTablet from '../../assets/images/logoTablet.svg';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import AdjustIcon from '@material-ui/icons/Adjust';
import { Typography } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import { getUser } from '../../firebase/tools/getUser';
import { login } from '../../firebase/tools/useLogin';
import CreatePlaylistModal from '../CreatePlaylistModal';
import { useMediaQuery } from 'react-responsive';
const Navbar = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const classes = useStyles();
  const { res } = getUser();

  const loginWithProvider = () => {
    login();
  };

  const handleUserLogin = () => {
    if (!res) {
      return (
        <div className={classes.tool} onClick={() => loginWithProvider()}>
          <MusicVideoIcon className={classes.toolIcon} />
          <Typography className={classes.toolText}>Cá Nhân</Typography>
        </div>
      );
    } else {
      return (
        <NavLink
          to="/mymusic"
          className={classes.tool}
          activeClassName={classes.activeTool}
        >
          <MusicVideoIcon className={classes.toolIcon} />
          <Typography className={classes.toolText}>Cá Nhân</Typography>
        </NavLink>
      );
    }
  };

  const handleSignInPopUp = () => {
    if (!res) {
      return (
        <div
          className={classes.signInContainer}
          onClick={() => loginWithProvider()}
        >
          <Typography className={classes.textSignIn}>
            Đăng nhập để khám phá những playlist dành riêng cho chính bạn.
          </Typography>
          <button className={classes.signInButton}>ĐĂNG NHẬP</button>
        </div>
      );
    } else {
      return <CreatePlaylistModal />;
    }
  };

  return (
    <div className={classes.bgColor}>
      <div className={classes.container}>
        <div className={classes.containerLogo}>
          {isTablet ? (
            <Link to="/">
              <img src={LogoTablet} className={classes.logoTablet} />
            </Link>
          ) : (
            <Link to="/">
              <img src={LogoDark} className={classes.logo} />
            </Link>
          )}
        </div>
        <div className={classes.tools}>
          {handleUserLogin()}
          <NavLink
            to="/"
            exact={true}
            className={classes.tool}
            activeClassName={classes.activeTool}
          >
            <AdjustIcon className={classes.toolIcon} />
            <Typography className={classes.toolText}>Khám Phá</Typography>
          </NavLink>
        </div>
        {!isTablet ? handleSignInPopUp() : ''}
      </div>
    </div>
  );
};

export default Navbar;
