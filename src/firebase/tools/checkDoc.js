import { projectFirestore } from '../config';

export const checkDocIfExist = async (collection, userId) => {
  const snapshot = await projectFirestore.collection(collection).get();
  let datas = [];
  snapshot.docs.map((doc) => datas.push({ ...doc.data(), id: doc.id }));
  let res = datas.filter((data) => {
    return data.userId === userId;
  });
  return res;
};
