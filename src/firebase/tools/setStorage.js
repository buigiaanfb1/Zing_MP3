import { projectStorage } from '../config';
import { getUser } from './getUser';

export const setStorage = () => {
  let error = null;
  let filePath = null;
  const { res: user } = getUser();

  const uploadMusic = async (file) => {
    filePath = `playlists/${user.uid}/${file.name}`;
    const storageRef = projectStorage.ref(filePath);

    try {
      const res = await storageRef.put(file);
      let url = await res.ref.getDownloadURL();
      return { url };
    } catch (err) {
      console.log(err.message);
    }
  };

  return { error, filePath, uploadMusic };
};
