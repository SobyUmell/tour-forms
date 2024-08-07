import { deleteObject } from "firebase/storage";

const deleteAllMedia = async (refs) => {
  try {
    const deletePromises = refs.map(ref => {
      return deleteObject(ref);
    })
    await Promise.all(deletePromises);
  } catch (error) {
    throw new Error('Failed to delete the form!');
  }
}

export default deleteAllMedia;