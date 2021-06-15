import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    overflow: 'auto',
  },

  containerContent: {
    width: '100%',
    height: '100%',
  },
  bodyScroll: {
    position: 'absolute',
    inset: '0',
    paddingTop: '70px',
    overflow: 'hidden auto',
    marginRight: '-0px',
    marginBottom: '90px',
  },
  ['@media (max-width:480px)']: {
    bodyScroll: {
      // marginBottom: '200px',
    },
  },
}));
