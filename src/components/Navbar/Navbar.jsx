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
import { Link } from 'react-router-dom';

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.bgColor}>
      <div className={classes.container}>
        <div>
          <Link to="/">
            <img src={LogoDark} className={classes.logo} />
          </Link>
        </div>
        <div className={classes.tools}>
          <div className={classes.tool}>
            <MusicVideoIcon className={classes.toolIcon} />
            <Typography className={classes.toolText}>Cá Nhân</Typography>
          </div>
          <div className={classes.tool}>
            <AdjustIcon className={classes.toolIcon} />
            <Typography className={classes.toolText}>Khám Phá</Typography>
          </div>
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
