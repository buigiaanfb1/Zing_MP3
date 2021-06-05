import { projectFirestore } from '../config';

export const getDocument = async (collection, id) => {
  console.log(collection, id);
  let documentRef = await projectFirestore.collection(collection).doc(id);
  const res = await documentRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
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
