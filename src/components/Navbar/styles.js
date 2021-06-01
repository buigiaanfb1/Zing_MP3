import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: '15px 27px',
    fontFamily: "'Inter', sans-serif",
  },
  logo: {
    maxWidth: '120px',
    maxHeight: '40px',
  },
  bgColor: {
    backgroundColor: 'var(--main-color)',
    height: 'calc(100vh)',
    color: 'var(--text-nav-color)',
    width: 'inherit',
  },

  tools: {
    padding: '1.1rem 0 1rem 0',
    borderBottom: '1px solid var(--border-primary)',
  },

  tool: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '10px 0',
  },

  toolIcon: {
    width: '24px',
    height: '24px',
    marginRight: '10px',
  },

  toolText: {
    fontSize: '14px',
    fontFamily: 'inherit',
    fontWeight: '500',
  },
}));
