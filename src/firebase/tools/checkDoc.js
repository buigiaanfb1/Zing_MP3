import { projectFirestore } from '../config';

export const checkDocIfExist = async (collection, userId) => {
  const documentRef = await projectFirestore.collection(collection).doc(userId);
  const res = await documentRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        return { ...doc.data(), id: doc.id };
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
  return res;
};
