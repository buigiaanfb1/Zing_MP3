import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: '7rem 2.5rem',
    color: 'var(--text-primary)',
  },

  item: {
    margin: '1rem 0',
  },

  title: {
    marginBottom: '0.2rem',
    fontWeight: '700',
  },

  cssLabel: {
    color: 'var(--text-primary) !important',
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'var(--text-primary) !important',
    color: 'var(--text-primary)',
  },
}));
