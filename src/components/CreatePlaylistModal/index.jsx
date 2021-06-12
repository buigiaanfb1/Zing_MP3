import React, { useState } from 'react';
import { useStyles } from './styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddIcon from '@material-ui/icons/Add';
import { Typography } from '@material-ui/core';
import { getUser } from '../../firebase/tools/getUser';
import { uploadPrivatePlaylist } from '../../firebase/tools/uploadPrivatePlaylist';
import notify from '../../common/toastify';

const CreatePlaylistModal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [playlistName, setPlaylistName] = useState('');
  const [uploading, setUploading] = useState(false);
  const { res: user } = getUser();

  const handleChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    if (playlistName) {
      setUploading(true);
      await uploadPrivatePlaylist(playlistName, user.uid, user.displayName);
      setOpen(false);
      notify('Tạo thành công playlist ' + playlistName);
      setUploading(false);
    }
  };

  return (
    <div>
      <div onClick={handleOpen} className={classes.containerButton}>
        <AddIcon className={classes.icon} />
        <Typography className={classes.text}>Tạo playlist mới</Typography>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form onSubmit={handleSubmit}>
              <div className={classes.container}>
                <Typography
                  id="transition-modal-title"
                  className={classes.title}
                >
                  Tạo playlist mới
                </Typography>
                <input
                  className={classes.input}
                  placeholder="Nhập tên playlist"
                  autoFocus
                  onChange={handleChange}
                />
                <div className={classes.rule}>
                  <Typography className={classes.titleRules}>
                    Công khai
                  </Typography>
                  <Typography className={classes.descriptionRules}>
                    Mọi người có thể nhìn thấy playlist này
                  </Typography>
                </div>
                <div className={classes.rule}>
                  <Typography className={classes.titleRules}>
                    Phát ngẫu nhiên
                  </Typography>
                  <Typography className={classes.descriptionRules}>
                    Luôn phát ngẫu nhiên tất cả bài hát
                  </Typography>
                </div>
                <button
                  className={`${classes.button} ${
                    !playlistName ? classes.disable : ''
                  }`}
                  onClick={handleSubmit}
                  disabled={uploading ? true : false}
                >
                  {uploading ? 'ĐANG TẠO...' : 'TẠO MỚI'}
                </button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default CreatePlaylistModal;
