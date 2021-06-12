import { projectStorage } from '../config';
import { getUser } from './getUser';

export const setStorage = () => {
  let error = null;
  let filePath = null;
  const { res: user } = getUser();

  const uploadMusic = async (file) => {
    filePath = `users/${user.uid}/${file.name}`;
    const storageRef = projectStorage.ref(filePath);

    try {
      const res = await storageRef.put(file);
      let url = await res.ref.getDownloadURL();
      return { url };
    } catch (err) {
      console.log(err.message);
    }
  };

  const uploadMusicAdmin = async (file, albumTitle) => {
    filePath = `album/${albumTitle}/${file.name}`;
    const storageRef = projectStorage.ref(filePath);
    try {
      const res = await storageRef.put(file);
      let url = await res.ref.getDownloadURL();
      return { url };
    } catch (err) {
      console.log(err.message);
    }
  };

  const uploadCoverAlbum = async (file, albumTitle) => {
    filePath = `cover/${albumTitle}/${file.name}`;
    const storageRef = projectStorage.ref(filePath);
    try {
      const res = await storageRef.put(file);
      let url = await res.ref.getDownloadURL();
      return { url };
    } catch (err) {
      console.log(err.message);
    }
  };

  const uploadImageSong = async (file, titleSong) => {
    filePath = `imageSongs/${titleSong}`;
    const storageRef = projectStorage.ref(filePath);
    try {
      const res = await storageRef.putString(file, 'data_url', {
        contentType: 'image/jpg',
      });
      let url = await res.ref.getDownloadURL();
      return { url };
    } catch (err) {
      console.log(err.message);
    }
  };

  return {
    error,
    filePath,
    uploadMusic,
    uploadMusicAdmin,
    uploadCoverAlbum,
    uploadImageSong,
  };
};
