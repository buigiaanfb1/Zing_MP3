import {
  FETCH_ALBUMS,
  IS_USER_LOGIN,
} from '../../Templates/Clients/Home/modules/constants';
import {
  SELECTED_SONG,
  SELECTED_ALBUM,
} from '../../Templates/Clients/Album/modules/constants';
import { CLOSE_QUEUE, OPEN_QUEUE } from '../action/action';

const initialState = {
  user: null,
  openQueue: false,
  albums: null,
  selectedSong: null,
  selectedAlbum: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_USER_LOGIN:
      state.user = payload;
      return { ...state };
    case OPEN_QUEUE:
      state.openQueue = true;
      return { ...state };

    case CLOSE_QUEUE:
      state.openQueue = false;
      return { ...state };

    case FETCH_ALBUMS:
      state.albums = payload;
      return { ...state };

    case SELECTED_ALBUM:
      state.selectedAlbum = payload;
      return { ...state };

    case SELECTED_SONG:
      state.selectedSong = payload;
      // copy ra rồi làm gì làm
      const copySelectedAlbum = { ...state.selectedAlbum };
      // tìm ra bài hát đang phát
      let selectedSongOnAlbum = copySelectedAlbum.songs?.map((song) => {
        if (song.song === payload.song) {
          // thêm thuộc tính isSelected vào (boolean)
          return { ...song, isSelected: true };
        } else {
          return { ...song, isSelected: false };
        }
      });

      state.selectedAlbum = {
        ...state.selectedAlbum,
        songs: selectedSongOnAlbum,
      };
      return { ...state };

    default:
      return state;
  }
};
