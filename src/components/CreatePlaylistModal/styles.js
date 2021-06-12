import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-primary)',
  },
  paper: {
    backgroundColor: 'var(--primary-bg)',
    borderRadius: '8px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 3),
  },
  container: {
    width: '290px',
  },

  containerButton: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: '10px 27px',
    cursor: 'pointer',
    '&:hover $icon': {
      color: '#DADADA',
    },
    '&:hover $text': {
      color: '#DADADA',
    },
  },
  icon: {
    marginRight: '5px',
    color: 'var(--text-primary)',
    fontSize: '25px',
  },
  text: {
    color: 'var(--text-primary)',
    fontSize: '14px',
    fontWeight: '700',
    fontFamily: 'inherit',
  },
  title: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '10px',
    textAlign: 'center',
  },
  input: {
    height: '40px',
    width: '100%',
    borderRadius: '999px',
    border: '1px solid var(--border-primary)',
    backgroundColor: 'var(--alpha-bg)',
    padding: '0 15px',
    fontSize: '14px',
    outline: 'none',
    color: 'var(--text-primary)',
  },
  button: {
    fontSize: '14px',
    width: '100%',
    textAlign: 'center',
    padding: '8px 0',
    marginTop: '20px',
    borderRadius: '999px',
    outline: 'none',
    border: 'none',
    backgroundColor: 'var(--purple-primary)',
    color: 'inherit',
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(0.9)',
    },
  },
  rule: {
    padding: '20px 15px 0',
  },
  titleRules: {
    fontSize: '14px',
    marginBottom: '5px',
    fontWeight: '400',
  },
  descriptionRules: {
    fontSize: '12px',
    color: 'var(--text-secondary)',
  },

  disable: {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
}));
