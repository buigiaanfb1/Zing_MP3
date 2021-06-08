import React from 'react';
import { useStyles } from './styles';
import LogoDark from '../../assets/images/logo-dark.svg';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import AdjustIcon from '@material-ui/icons/Adjust';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import { Typography } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import { getUser } from '../../firebase/tools/getUser';
import { login } from '../../firebase/tools/useLogin';
const Navbar = () => {
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

  return (
    <div className={classes.bgColor}>
      <div className={classes.container}>
        <div className={classes.containerLogo}>
          <Link to="/">
            <img src={LogoDark} className={classes.logo} />
          </Link>
        </div>
        <div className={classes.tools}>
          {/* <NavLink
            to="/mymusic"
            className={classes.tool}
            activeClassName={classes.activeTool}
          >
            <MusicVideoIcon className={classes.toolIcon} />
            <Typography className={classes.toolText}>Cá Nhân</Typography>
          </NavLink> */}
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
          <div className={classes.tool}>
            <AssessmentOutlinedIcon className={classes.toolIcon} />
            <Typography className={classes.toolText}>Zing Chart</Typography>
          </div>
          <div className={classes.tool}>
            <ReceiptOutlinedIcon className={classes.toolIcon} />
            <Typography className={classes.toolText}>Theo Dõi</Typography>
          </div>
        </div>
        <div className={classes.tools}>
          <div className={classes.tool}>
            <MusicNoteOutlinedIcon className={classes.toolIcon} />
            <Typography className={classes.toolText}>Nhạc Mới</Typography>
          </div>
          <div className={classes.tool}>
            <CategoryOutlinedIcon className={classes.toolIcon} />
            <Typography className={classes.toolText}>Thể Loại</Typography>
          </div>
          <div className={classes.tool}>
            <GradeOutlinedIcon className={classes.toolIcon} />
            <Typography className={classes.toolText}>Top 100</Typography>
          </div>
          <div className={classes.tool}>
            <OndemandVideoOutlinedIcon className={classes.toolIcon} />
            <Typography className={classes.toolText}>MV</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
