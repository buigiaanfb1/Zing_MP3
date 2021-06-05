import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '0px',
    padding: '0 2.5rem',
    color: 'var(--main-text)',
    fontFamily: "'Inter', sans-serif",
  },

  titleAll: {
    fontFamily: 'inherit',
    fontSize: '18px',
    fontWeight: '700',
    margin: '0 0 10px',
    marginLeft: '15px',
    transform: 'translate(0, 120%)',
  },

  containerAlbum: {
    width: '100%',
    padding: '0 15px',
  },

  containerImageAlbum: {
    borderRadius: '4px',
    position: 'relative',
    '&:hover $overlay': {
      display: 'block',
    },
  },

  tools: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: '2',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: '18px',
    height: '18px',
  },

  iconTool: {
    width: '28px',
    height: '28px',
  },

  iconPlayContainer: {
    margin: '0 1rem',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    border: '1px solid #fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconPlay: {
    width: '28px',
    height: '28px',
    // lineHeight: '35px',
  },

  overlay: {
    display: 'none',
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: '1',
    backgroundColor: 'var(--blur-album)',
    pointerEvents: 'none',
  },

  imageAlbum: {
    maxWidth: '100%',
    transition: 'all 0.5s ease-in-out',
    maxHeight: '100%',
    '&:hover': {
      transform: 'scale(1.08)',
    },
  },

  title: {
    fontSize: '14px',
    fontFamily: 'inherit',
    fontWeight: '500',
    padding: '8px 0px 3px',
  },

  initialSlick: {
    position: 'relative',
    padding: '2rem 0rem 0rem 0',
  },
  arrowLeft: {
    position: 'absolute',
    top: '0px',
    right: '60px',
    zIndex: '10px',
    width: '20px',
    height: '20px',
  },
  arrowRight: {
    position: 'absolute',
    top: '0px',
    right: '15px',
    zIndex: '10px',
    width: '20px',
    height: '20px',
  },
}));
