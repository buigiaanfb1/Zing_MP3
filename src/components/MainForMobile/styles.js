import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: '3rem 1rem',
    marginBottom: '120px',
  },
  paper: {
    padding: theme.spacing(0),
  },
  img: {
    width: '100%',
    borderRadius: '4px',
  },
  title: {
    fontSize: '14px',
    fontFamily: 'inherit',
    fontWeight: '500',
    padding: '2px 0px 3px',
  },
  a: {
    textDecoration: 'none',
    color: 'var(--text-primary)',
  },
}));
