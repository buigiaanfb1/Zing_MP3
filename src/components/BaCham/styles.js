import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  customPopOver: {
    backgroundColor: 'var(--primary-bg)',
    color: 'var(--text-primary)',
    borderRadius: '8px',
  },

  menu: {
    width: '280px',
    height: '100%',
    backgroundColor: 'var(--primary-bg)',
    // borderRadius: '8px',
    zIndex: '101',
    boxShadow: '0 2px 5px var(--portal-menu-box-shadow)',
  },

  itemMenu: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px 10px 14px',
  },
  itemMenuIcon: {
    fontSize: '22px',
    marginRight: '10px',
  },
  itemMenuText: {
    fontSize: '14px',
  },
}));
