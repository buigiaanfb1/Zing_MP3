import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  // container: {
  //   overflowY: 'auto !important',
  // },

  containerContent: {
    overflow: 'hidden',
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
}));
