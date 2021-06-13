import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {},
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
    cursor: 'not-allowed',
    alignItems: 'center',
    padding: '10px 20px 10px 16px',

    '&:hover': {
      backgroundColor: 'var(--alpha-bg)',
    },
  },
  itemMenuAccordion: {
    display: 'flex',
    alignItems: 'center',
    // padding: '10px 20px 10px 14px',
    cursor: 'pointer',
    // '&:hover': {
    //   backgroundColor: 'var(--alpha-bg)',
    // },
  },
  itemMenuIcon: {
    fontSize: '22px',
    marginRight: '10px',
    opacity: '0.8',
  },
  itemMenuText: {
    fontFamily: 'inherit',
    fontSize: '14px',
    fontWeight: '400',
    opacity: '0.8',
  },
  media: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px 10px 14px',
    cursor: 'pointer',
  },
  imageContainer: {
    width: '20%',
  },
  mediaImage: {
    maxWidth: '40px',
    maxHeight: '40px',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  title: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontFamily: 'inherit',
    fontSize: '14px',
    fontWeight: '500',
  },

  author: {
    fontFamily: 'inherit',
    fontSize: '12px',
    fontWeight: '500',
    color: 'var(--text-secondary)',
  },
  mediaContent: {
    width: '80%',
  },
  expandIcon: {
    color: 'var(--text-secondary)',
  },
}));
