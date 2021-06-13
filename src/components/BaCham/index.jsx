import React from 'react';
import { useStyles } from './styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import QueueMusicOutlinedIcon from '@material-ui/icons/QueueMusicOutlined';
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined';
import defaultCoverSong from '../../assets/images/defaultCoverSong.png';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core';
import PlaylistItem from '../PlaylistItem';
import { useDispatch } from 'react-redux';
import { ADD_SONG_TO_QUEUE } from '../../Templates/Clients/Home/modules/constants';

const Accordion = withStyles({
  root: {
    color: 'var(--text-primary)',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'var(--alpha-bg)',
    },
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionDetails = withStyles((theme) => ({
  root: {
    display: 'block',
    maxHeight: '200px',
    overflow: 'auto',
  },
}))(MuiAccordionDetails);

const BaCham = ({ song }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // thêm 1 bài nhạc vào queue
  const handleAddSong = (song) => {
    dispatch({
      type: ADD_SONG_TO_QUEUE,
      payload: song,
    });
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={classes.root}>
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
          <div className={classes.media}>
            <div className={classes.imageContainer}>
              <img
                src={song.picture ? song.picture : defaultCoverSong}
                className={classes.mediaImage}
                width="40px"
                height="40px"
              />
            </div>
            <div className={classes.mediaContent}>
              <Typography className={classes.title}>{song.title}</Typography>
              <Typography className={classes.author}>{song.artist}</Typography>
            </div>
          </div>
          <div className={classes.itemMenu}>
            <QueueMusicOutlinedIcon className={classes.itemMenuIcon} />
            <Typography className={classes.itemMenuText}>
              Thêm vào danh sách phát
            </Typography>
          </div>
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className={classes.itemMenuAccordion}>
                  <LibraryAddOutlinedIcon className={classes.itemMenuIcon} />
                  <Typography className={classes.itemMenuText}>
                    Thêm vào playlist
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <PlaylistItem song={song} handleCloseParent={handleClose} />
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default BaCham;
