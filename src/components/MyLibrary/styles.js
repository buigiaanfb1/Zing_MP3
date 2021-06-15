import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
  },

  menu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItems: {
    marginTop: '58px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '999px',
    backgroundColor: 'var(--alpha-bg)',
    justifyContent: 'center',
    padding: '3px',
    textTransform: 'uppercase',
  },

  menuNotSelected: {
    fontSize: '12px',
    fontWeight: '300',
    borderRadius: '999px',
    padding: '4px 25px',
    cursor: 'pointer',
    color: 'rgba(255,255,255,0.6)',
    // backgroundColor: 'var(--tab-active-bg)',
  },

  menuSelected: {
    fontSize: '12px',
    fontWeight: '300',
    borderRadius: '999px',
    padding: '4px 25px',
    cursor: 'pointer',
    color: 'var(--text-primary)',
    backgroundColor: 'var(--tab-active-bg)',
  },
  ['@media (max-width:480px)']: {
    menuSelected: {
      fontSize: '10px',
    },
    menuNotSelected: {
      fontSize: '10px',
    },
  },
}));
