const postAnswers = async (formId, list) => {
  try {
    const response = await api.post('/answers', {formId, list});
    return response;
  } catch (error) {
    throw new Error('Failed to upload the form!');
  }
}

export default postAnswers;