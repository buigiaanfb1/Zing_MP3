import { toast } from 'react-toastify';

const notify = (text) =>
  toast(text, {
    className: 'black-background',
    bodyClassName: 'grow-font-size',
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export default notify;
