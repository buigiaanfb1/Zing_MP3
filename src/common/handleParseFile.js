import * as mmb from 'music-metadata-browser';

// trích xuất title, image từ file mp3
export const testImage = (file) => {
  // console.log(file[0]);
  // jsmediatags.read(
  //   'https://firebasestorage.googleapis.com/v0/b/zingmp3-13250.appspot.com/o/playlists%2FwGN1fPn0N0bvI0G8MsECfWQy94A3%2FBoneless-Steve-Aoki-Chris-Lake-Tujamo.mp3?alt=media&token=071c7548-741b-4638-a716-76d552961028',
  //   {
  //     onSuccess: function (tag) {
  //       console.log(tag);
  //       var image = tag.tags.picture;
  //       if (image) {
  //         var base64String = '';
  //         for (var i = 0; i < image.data.length; i++) {
  //           base64String += String.fromCharCode(image.data[i]);
  //         }
  //         var base64 =
  //           'data:' + image.format + ';base64,' + window.btoa(base64String);
  //         document.getElementById('cover').setAttribute('src', base64);
  //       } else {
  //         return;
  //       }
  //     },
  //     onError: function (error) {
  //       console.log(':(', error.type, error.info);
  //     },
  //   }
  // );
  return mmb
    .fetchFromUrl(
      'https://firebasestorage.googleapis.com/v0/b/zingmp3-13250.appspot.com/o/playlists%2FwGN1fPn0N0bvI0G8MsECfWQy94A3%2FBoneless-Steve-Aoki-Chris-Lake-Tujamo.mp3?alt=media&token=071c7548-741b-4638-a716-76d552961028',
      { native: true }
    )
    .then((metadata) => {
      // console.log(
      //   `Completed parsing of ${file.name}:`,
      //   metadata.common.picture[0].data
      // );
      const image = metadata.common.picture[0];
      var base64String = '';
      for (var i = 0; i < image.data.length; i++) {
        base64String += String.fromCharCode(image.data[i]);
      }
      var base64 =
        'data:' + image.format + ';base64,' + window.btoa(base64String);
      document.getElementById('cover').setAttribute('src', base64);
    });
};
