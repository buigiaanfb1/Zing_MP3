import { setStorage } from './setStorage';
import { checkDocIfExist } from './checkDoc';
import { setCollection } from './setCollection';
import { timestamp } from '../config';
import { updateDoc } from './updateDoc';
import { parseSongMp3 } from '../../common/handleParseFile';

export const uploadMusicPrivate = async (file, userId, displayName) => {
  //   upload file mp3 lên firebase
  const { uploadMusic, uploadImageSong } = setStorage();
  // Kiểm tra người mới hay người cũ.
  const res = await checkDocIfExist('users', userId);
  // lấy link nhạc từ firestore
  const { url: songUrl } = await uploadMusic(file);
  //   parse ra để lấy hình ảnh, tên artist,....
  const info = await parseSongMp3(file);
  console.log(info);
  // tạo mảng hứng giá trị
  let arrSongs = [];
  //   Check < 1 là người mới
  if (!res) {
    console.log('newbie');
    if (info?.picture) {
      const { url: imgSongUrl } = await uploadImageSong(
        file,
        info.picture,
        displayName
      );
      arrSongs.push({ ...info, song: songUrl, picture: imgSongUrl });
    } else {
      arrSongs.push({ ...info, song: songUrl, picture: '' });
    }
    // Chưa có playlist (người mới) thì tự tạo 1 cái.
    const { addDocForPrivate } = setCollection('users');
    await addDocForPrivate(
      {
        userId: userId,
        userName: displayName,
        songs: [...arrSongs],
        playlists: [],
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
    if (dataArray.songs) {
      // Get id của cái document
      let id = dataArray.id;
      if (info?.picture) {
        const { url: imgSongUrl } = await uploadImageSong(
          file,
          info.picture,
          displayName
        );
        arrSongs.push({ ...info, song: songUrl, picture: imgSongUrl });
      } else {
        arrSongs.push({ ...info, song: songUrl, picture: '' });
      }
      // Thêm bài hát vào
      dataArray.songs = [...dataArray.songs, ...arrSongs];
      let data = dataArray;
      // Update lại
      await updateDoc('users', id, data);
    } else {
      // Get id của cái document
      let id = dataArray.id;
      if (info?.picture) {
        const { url: imgSongUrl } = await uploadImageSong(
          info.picture,
          displayName
        );
        arrSongs.push({ ...info, song: songUrl, picture: imgSongUrl });
      } else {
        arrSongs.push({ ...info, song: songUrl, picture: '' });
      }
      // Thêm bài hát vào
      dataArray = { ...dataArray, songs: arrSongs };
      let data = dataArray;
      // Update lại
      await updateDoc('users', id, data);
    }
  }
};
