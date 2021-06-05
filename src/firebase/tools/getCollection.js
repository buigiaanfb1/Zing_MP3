import { projectFirestore } from '../config';

export const getCollection = async (collection) => {
  try {
    let albumsArray = [];
    let collectionRef = await projectFirestore.collection(collection).get();
    collectionRef.docs.map((doc) =>
      albumsArray.push({ ...doc.data(), id: doc.id })
    );
    return albumsArray;
  } catch (err) {
    console.log(err);
  }
};
