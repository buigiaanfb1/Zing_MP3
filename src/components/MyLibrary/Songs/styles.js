import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: "'Inter', sans-serif",
    width: '100%',
    color: 'var(--text-primary)',
    paddingTop: '40px',
  },

  tag: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '18px',
    fontWeight: '700',
  },

  iconTag: {
    fontSize: '20px',
    marginRight: '0.3rem',
    maxHeight: '18px',
  },

  uploadContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '4.5px 16px',
    borderRadius: '999px',
    backgroundColor: 'var(--alpha-bg)',
    border: '1px solid var(--border-primary)',
    marginRight: '15px',
  },
  upload: {
    fontFamily: 'inherit',
    fontSize: '12px',
    color: 'var(--text-primary)',
  },
  listenAllContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '4.5px 16px',
    borderRadius: '999px',
    borderRadius: '999px',
    backgroundColor: 'var(--purple-primary)',
    border: '1px solid var(--purple-primary)',
  },
  listenAll: {
    fontFamily: 'inherit',
    fontSize: '12px',
    color: 'var(--text-primary)',
  },

  title: {
    display: 'flex',
    marginBottom: '15px',
  },

  right: {
    display: 'flex',
    marginLeft: 'auto',
  },
  containerNothing: {
    width: '100%',
    padding: '30px 1rem',
    minHeight: '220px',
    backgroundColor: 'var(--alpha-bg)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: '80px',
    marginBottom: '20px',
  },
  text: {},

  ['@media (max-width:480px)']: {
    tag: {
      display: 'none',
    },
  },
}));
