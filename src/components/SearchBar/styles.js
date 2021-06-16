import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    color: 'var(--search-text)',
    backgroundColor: 'var(--search-bg)',
    marginLeft: 0,
    borderRadius: '50px',
    width: '100%',
    marginRight: '1rem',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    height: '40px',
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
  },
  inputInput: {
    cursor: 'not-allowed',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '54ch',
    },
  },

  ['@media (max-width:960px)']: {
    inputInput: {
      width: '30ch',
    },
  },
  ['@media (max-width:600px)']: {
    search: {
      display: 'none',
    },
    inputInput: {
      display: 'none',
    },
  },
}));
