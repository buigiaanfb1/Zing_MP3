import { projectFirestore } from '../config';

export const setCollection = (document) => {
  const addDoc = async (doc) => {
    try {
      const res = await projectFirestore.collection(document).add(doc);
      return res;
    } catch (err) {
      console.log(err.message);
    }
  };

  return { addDoc };
};
