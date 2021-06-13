import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    padding: '10px 20px 10px 14px',
    width: '100%',
    cursor: 'pointer',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: 'var(--primary-bg)',
    },
  },
  icon: {
    fontSize: '22px',
    marginRight: '10px',
    opacity: '0.8',
  },
  title: {
    fontFamily: 'inherit',
    fontSize: '14px',
    fontWeight: '400',
    opacity: '0.8',
  },
}));
