import * as mmb from 'music-metadata-browser';

// trích xuất title, image từ file mp3
export const parseSongMp3 = async (file) => {
  const info = {
    title: file.name.slice(0, -4),
    artist: 'Various Artists',
    picture: '',
    duration: 0,
  };
  return await mmb.parseBlob(file).then((metadata) => {
    if (metadata.common?.picture) {
      const image = metadata.common.picture[0];
      var base64String = '';
      for (var i = 0; i < image.data.length; i++) {
        base64String += String.fromCharCode(image.data[i]);
      }
      info.picture =
        'data:' + image.format + ';base64,' + window.btoa(base64String);
    }
    if (metadata.common?.title) {
      info.title = metadata.common.title;
    }
    if (metadata.common?.artist) {
      info.artist = metadata.common.artist;
    }
    if (metadata.format?.duration) {
      info.duration = metadata.format.duration;
    }
    return info;
  });
};
