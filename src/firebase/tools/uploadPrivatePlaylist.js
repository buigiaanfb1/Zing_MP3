import { checkDocIfExist } from './checkDoc';
import { setCollection } from './setCollection';
import { timestamp } from '../config';
import { updateDoc } from './updateDoc';

export const uploadPrivatePlaylist = async (
  titlePlaylist,
  userId,
  displayName
) => {
  let arrPlaylists = [];
  // tạo mảng hứng giá trị
  const docUser = await checkDocIfExist('users', userId);
  // new doc playlist
  let newDocPlaylist = {
    userId: userId,
    userName: displayName,
    title: titlePlaylist,
    songs: [],
    // createdAt: timestamp(),
  };
  // Chưa có playlist (người mới) thì tự tạo 1 cái.
  const { addDoc } = setCollection('playlists');
  const docPlaylist = await addDoc(newDocPlaylist);
  console.log(newDocPlaylist);
  arrPlaylists.push({ ...newDocPlaylist, id: docPlaylist.id });
  // Chưa có user (người mới) thì tự tạo 1 cái.
  if (!docUser) {
    // new doc users
    console.log('newbie');
    let newDocUser = {
      userId: userId,
      userName: displayName,
      songs: [],
      // lưu lại id playlist để fetch api
      playlists: [...arrPlaylists],
      createdAt: timestamp(),
    };
    const { addDocForPrivate } = setCollection('users');
    await addDocForPrivate(newDocUser, userId);
    console.log('Success');
  } else {
    console.log('old account');
    console.log(docUser);
    let copyDocUser = { ...docUser };
    let arrPlaylists = [
      ...copyDocUser.playlists,
      { ...newDocPlaylist, id: docPlaylist.id },
    ];

    let copyUsers = { ...copyDocUser, playlists: arrPlaylists };
    // Update lại
    await updateDoc('users', userId, copyUsers);
  }
};
