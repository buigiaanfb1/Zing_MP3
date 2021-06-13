import { Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import { useStyles } from './styles';
import { getUser } from '../../../firebase/tools/getUser';
import { useLogout } from '../../../firebase/tools/useLogout';
import MyLibrary from '../../../components/MyLibrary';
import PopOver from '../../../components/PopOver';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Grid from '@material-ui/core/Grid';
import history from '../../../history';
import { CLEAR_ALBUM_SIGN_OUT } from './modules/constants';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../../common/animation';

const MyMusic = () => {
  const classes = useStyles();
  const { res: user } = getUser();
  const { error, logout } = useLogout();
  const dispatch = useDispatch();

  const handleLogout = () => {
    logout();
    dispatch({
      type: CLEAR_ALBUM_SIGN_OUT,
    });
    if (!error) {
      history.push('/');
    }
  };
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className={`${classes.container} ${classes.bodyScroll}`}>
        <Grid container spacing={0}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <div className={`${classes.avatarContainer}`}>
              <img
                src={user.photoURL}
                alt="avatar"
                className={classes.avatar}
              />
              <Typography className={classes.name}>
                {user.displayName}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ paddingTop: '89px' }}>
              <div
                className={classes.iconContainer}
                onClick={(e) => handleLogout()}
              >
                <ExitToAppIcon className={classes.iconSignOut} />
                <div className={classes.popOver}>
                  <PopOver text="Đăng Xuất" />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <MyLibrary />
      </div>
    </motion.div>
  );
};

export default MyMusic;
