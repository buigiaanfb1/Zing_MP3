import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
    transform: 'translate(-0.8%, 1%)',
  },
  paper: {
    padding: theme.spacing(0),
    backgroundColor: 'var(--pop-over-bg)',
  },
  text: {
    color: 'var(--text-primary)',
    fontSize: '11px',
    fontWeight: '500',
    padding: '0.3rem 0.6rem',
  },
}));
