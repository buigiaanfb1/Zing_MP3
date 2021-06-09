import Home from './Templates/Clients/Home/Home';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  SELECTED_ALBUM,
  SELECTED_SONG,
} from './Templates/Clients/Album/modules/constants';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    handleDispatchAlbumFromLocalStorage();
    handleDispatchMusicFromLocalStorage();
  }, []);

  const handleDispatchMusicFromLocalStorage = () => {
    if (localStorage.getItem('zmp3_current_player')) {
      dispatch({
        type: SELECTED_SONG,
        payload: JSON.parse(localStorage.getItem('zmp3_current_player')),
      });
    }
  };

  const handleDispatchAlbumFromLocalStorage = () => {
    if (localStorage.getItem('zmp3_queue')) {
      dispatch({
        type: SELECTED_ALBUM,
        payload: JSON.parse(localStorage.getItem('zmp3_queue')),
      });
    }
  };
  return (
    <div className="App">
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
