import { checkDocIfExist } from './checkDoc';
import { setCollection } from './setCollection';
import { timestamp } from '../config';
import { updateDoc } from './updateDoc';

export const uploadPrivatePlaylist = async (
  titlePlaylist,
  userId,
  displayName
) => {
  // Kiểm tra người mới hay người cũ.
  const res = await checkDocIfExist('playlists', userId);
  // tạo mảng hứng giá trị
  let arrPlaylists = [];
  //   Check < 1 là người mới
  if (!res) {
    console.log('newbie');
    arrPlaylists.push({ title: titlePlaylist });
    // Chưa có playlist (người mới) thì tự tạo 1 cái.
    const { addDocForPrivate } = setCollection('playlists');
    await addDocForPrivate(
      {
        userId: userId,
        userName: displayName,
        playlists: [...arrPlaylists],
        createdAt: timestamp(),
      },
      userId
    );
    console.log('Success');

    // Có rồi thi update
  } else {
    console.log('old account');
    // Copy ra địa chỉ mới
    let dataArray = { ...res };
    if (dataArray.playlists) {
      // Get id của cái document
      let id = dataArray.id;
      arrPlaylists.push({ title: titlePlaylist });
      // Thêm bài hát vào
      dataArray.playlists = [...dataArray.playlists, ...arrPlaylists];
      let data = dataArray;
      // Update lại
      await updateDoc('playlists', id, data);
    } else {
      // Get id của cái document
      let id = dataArray.id;
      arrPlaylists.push({ title: titlePlaylist });
      // Thêm bài hát vào
      dataArray = { ...dataArray, playlists: arrPlaylists };
      let data = dataArray;
      // Update lại
      await updateDoc('playlists', id, data);
    }
  }
};
