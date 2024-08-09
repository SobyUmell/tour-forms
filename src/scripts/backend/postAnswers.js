import api from "./api";

const postAnswers = async (answers) => {
  try {
    const response = await api.post('/answers', answers);
    return response;
  } catch (error) {
    throw new Error('Failed to upload the form!');
  }
}

export default postAnswers;