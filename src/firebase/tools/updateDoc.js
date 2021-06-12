import { projectFirestore } from '../config';

export const updateDoc = async (collection, id, updates) => {
  console.log(collection, id, updates);
  let docRef = await projectFirestore.collection(collection).doc(id);
  try {
    await docRef.update(updates);
  } catch (err) {
    console.log(err.message);
  }
};
