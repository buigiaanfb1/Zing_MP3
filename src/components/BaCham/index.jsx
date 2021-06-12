import React from 'react';
import { useStyles } from './styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import QueueMusicOutlinedIcon from '@material-ui/icons/QueueMusicOutlined';
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined';

const BaCham = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <div
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <MoreHorizOutlinedIcon />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          className: classes.customPopOver,
        }}
      >
        <div className={classes.menu}>
          <div className={classes.itemMenu}>
            <QueueMusicOutlinedIcon className={classes.itemMenuIcon} />
            <Typography className={classes.itemMenuText}>
              Thêm vào danh sách phát
            </Typography>
          </div>
          <div className={classes.itemMenu}>
            <LibraryAddOutlinedIcon className={classes.itemMenuIcon} />
            <Typography className={classes.itemMenuText}>
              Thêm vào playlist
            </Typography>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default BaCham;
