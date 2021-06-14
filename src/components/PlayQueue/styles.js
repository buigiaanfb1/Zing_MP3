import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    height: 'calc(100vh)',
    maxHeight: 'calc(100vh)',
    bottom: '0',
    right: '0',
    position: 'relative',
    borderRadius: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    fontFamily: "'Inter', sans-serif",
    // overflow: 'hidden',
  },
  wrapper: {
    padding: '0 8px',
  },

  navbar: {
    display: 'flex',
    alignItems: 'center',
    // padding: '14px 0',
    height: '70px',
  },

  textContainer: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '999px',
    backgroundColor: 'var(--alpha-bg)',
    justifyContent: 'center',
    padding: '3px',
  },

  text: {
    fontSize: '12px',
    fontWeight: '700',
    borderRadius: '999px',
    padding: '5px 10px',
    cursor: 'pointer',
    color: 'rgba(255,255,255,0.6)',
    // backgroundColor: 'var(--tab-active-bg)',
  },

  textSelected: {
    fontSize: '12px',
    fontWeight: '700',
    borderRadius: '999px',
    padding: '5px 10px',
    cursor: 'pointer',
    backgroundColor: 'var(--tab-active-bg)',
  },

  containerIcon: {
    height: '32px',
    width: '32px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '0.43rem',
    borderRadius: '50%',
    backgroundColor: 'var(--icon-bg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    lineHeight: '35px',
    fontSize: '20px',
  },

  musicContainer: {
    display: 'flex',
    padding: '8px',
    // backgroundColor: 'var(--purple-primary)',
    borderRadius: '5px',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--alpha-bg)',
    },
  },

  containerImg: {
    position: 'relative',
  },

  gifContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    // width: '20px',
    // height: '20px',
    transform: 'translate(-50%, -50%) scale(0.5)',
  },

  musicContainerSelected: {
    display: 'flex',
    padding: '8px',
    backgroundColor: 'var(--purple-primary)',
    borderRadius: '5px',
    alignItems: 'center',
    cursor: 'pointer',
  },

  containerTitleAuthor: {
    marginLeft: '10px',
    // display: 'flex',
    // alignItems: 'flex-start',
    // flexDirection: 'column',
  },

  title: {
    fontFamily: 'inherit',
    fontSize: '14px',
    fontWeight: '500',
  },

  author: {
    fontFamily: 'inherit',
    fontSize: '12px',
    fontWeight: '500',
    color: 'var(--text-secondary)',
  },

  img: {
    maxWidth: '40px',
    maxHeight: '40px',
    borderRadius: '4px',
    width: '100%',
  },

  bodyScroll: {
    position: 'absolute',
    inset: '0',
    overflow: 'hidden auto',
    marginRight: '-0px',
    marginBottom: '0px',
    paddingBottom: '90px',
  },
}));
