import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: '15px 0',
    fontFamily: "'Inter', sans-serif",
  },

  containerLogo: {
    padding: '0 27px',
  },
  logo: {
    maxWidth: '120px',
    maxHeight: '40px',
  },
  bgColor: {
    backgroundColor: 'var(--main-color)',
    height: 'calc(100vh)',
    width: 'inherit',
  },

  tools: {
    padding: '1.1rem 0 1rem 0',
    color: 'var(--text-nav-color)',
    position: 'relative',
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '50%',
      margin: '0 0',
      width: '80%',
      height: '1px',
      backgroundColor: 'var(--border-primary)',
      transform: 'translate(-50%, 0)',
    },
  },

  tool: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '10px 27px',
    cursor: 'pointer',
    '&:hover $toolIcon': {
      color: 'var(--text-primary)',
    },
    '&:hover $toolText': {
      color: 'var(--text-primary)',
    },
  },

  activeTool: {
    position: 'relative',
    backgroundColor: 'var(--alpha-bg)',
    color: 'var(--text-primary) !important',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '3px',
      height: '100%',
      backgroundColor: 'var(--purple-primary)',
    },
  },

  toolIcon: {
    width: '24px',
    height: '24px',
    marginRight: '10px',
    color: 'inherit',
  },

  toolText: {
    fontSize: '14px',
    fontFamily: "'Inter', sans-serif",
    fontWeight: '500',
    color: 'inherit',
  },

  signInContainer: {
    margin: '15px',
    padding: '20px',
    borderRadius: '16px',
    textAlign: 'center',
    color: 'var(--text-primary)',
    backgroundColor: 'var(--purple-primary)',
  },
  textSignIn: {
    fontFamily: 'inherit',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '150%',
    wordSpacing: '-0.5px',
    letterSpacing: '-0.5px',
  },
  signInButton: {
    marginTop: '15px',
    borderRadius: '999px',
    padding: '9px 40px',
    color: 'inherit',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: '1px solid var(--white)',
    fontSize: '14px',
    '&:hover': {
      opacity: '0.8',
    },
  },
}));
