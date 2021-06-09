import {
  FETCH_ALBUMS,
  IS_USER_LOGIN,
} from '../../Templates/Clients/Home/modules/constants';
import {
  SELECTED_SONG,
  SELECTED_ALBUM,
  CHANGE_NEXT_SONG,
  CHANGE_PREVIOUS_SONG,
  IS_PLAYING,
} from '../../Templates/Clients/Album/modules/constants';
import { CLOSE_QUEUE, OPEN_QUEUE } from '../action/action';
import { CLEAR_ALBUM_SIGN_OUT } from '../../Templates/Clients/MyMusic/modules/constants';

const initialState = {
  openQueue: false,
  albums: null,
  selectedSong: null,
  selectedAlbum: null,
  isPlaying: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_QUEUE:
      state.openQueue = true;
      return { ...state };

    case CLOSE_QUEUE:
      state.openQueue = false;
      return { ...state };

    case IS_PLAYING:
      state.isPlaying = !state.isPlaying;
      return { ...state };

    case FETCH_ALBUMS:
      state.albums = payload;
      return { ...state };

    case SELECTED_ALBUM:
      state.selectedAlbum = payload;
      return { ...state };

    case SELECTED_SONG: {
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
    }

    case CHANGE_NEXT_SONG: {
      // copy ra rồi làm gì làm
      const copySelectedAlbum = { ...state.selectedAlbum };
      // init bài hát tiếp theo
      let nextSong = null;
      // iterate bằng vòng lặp
      for (let i = 0; i < copySelectedAlbum.songs.length; i++) {
        // nếu chưa phải là bài cuối cùng của album
        if (
          copySelectedAlbum.songs[i].song === state.selectedSong.song &&
          i < copySelectedAlbum.songs.length - 1
        ) {
          nextSong = copySelectedAlbum.songs[i + 1];
          break;
        }
        // nếu là bài cuối thì quay lại bài đầu của playlist
        else {
          nextSong = copySelectedAlbum.songs[0];
        }
      }
      let selectedSongOnAlbum = copySelectedAlbum.songs?.map((song) => {
        if (song.song === nextSong.song) {
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
      state.selectedSong = nextSong;
      return { ...state };
    }

    case CHANGE_PREVIOUS_SONG: {
      // copy ra rồi làm gì làm
      const copySelectedAlbum = { ...state.selectedAlbum };
      // init bài hát tiếp theo
      let previousSong = null;
      // iterate bằng vòng lặp
      for (let i = 0; i < copySelectedAlbum.songs.length; i++) {
        // nếu chưa phải là bài đầu của album
        if (
          copySelectedAlbum.songs[i].song === state.selectedSong.song &&
          i > 0
        ) {
          previousSong = copySelectedAlbum.songs[i - 1];
          console.log(previousSong);
          break;
        }
        // nếu là bài đầu thì nhảy xuống cuối playlist
        else {
          previousSong =
            copySelectedAlbum.songs[copySelectedAlbum.songs.length - 1];
        }
      }
      let selectedSongOnAlbum = copySelectedAlbum.songs?.map((song) => {
        if (song.song === previousSong.song) {
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
      state.selectedSong = previousSong;
      return { ...state };
    }

    case CLEAR_ALBUM_SIGN_OUT: {
      state.selectedAlbum = null;
      state.selectedSong = null;
      return { ...state };
    }
    default:
      return state;
  }
};
