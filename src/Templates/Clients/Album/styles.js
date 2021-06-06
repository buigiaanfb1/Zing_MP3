import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: '7rem 2.5rem',
    color: 'var(--text-primary)',
  },
  root: {
    flexGrow: 1,
  },
  img: {
    borderRadius: '5px',
    width: '100%',
  },
  bodyScroll: {
    position: 'absolute',
    inset: '0',
    overflow: 'hidden auto',
    marginRight: '-0px',
    marginBottom: '90px',
  },
}));
