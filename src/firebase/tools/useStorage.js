import { LensTwoTone } from '@material-ui/icons';
import { projectStorage } from '../config';
import getUser from './getUser';

const { res: user } = getUser();

const useStorage = () => {
  let url = null;
  let error = null;
  let filePath = null;

  const uploadImage = async (file) => {
    filePath = `playlists/${user.uid}/${file.name}`;
    const storageRef = projectStorage.ref(filePath);

    try {
      const res = await storageRef.put(file);
      url = await res.ref.getDownloadURL();
    } catch (err) {
      console.log(err.message);
    }
  };

  return { url, error, filePath, uploadImage };
};
