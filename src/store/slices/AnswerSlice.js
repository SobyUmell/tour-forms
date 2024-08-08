import { createSlice } from '@reduxjs/toolkit'
import postAnswers from '../../scripts/backend/postAnswers';
export const answerSlice = createSlice({
  name: 'answers',
  initialState: {
    formId: null,
    list: {}
  },
  reducers: {
    setFormId: (state, action) => {
      state.formId = action.payload;
    },
    updateAnswer: (state, action) => {
      state.list[action.payload.name] = {
        number: action.payload.number,
        text: action.payload.text,
      }
    },
    sendAnswers: (state, action) => {
      postAnswers(state.formId, state.list)
      .then(() => {
        action.payload.success();
      })
      .catch((error) => {
        action.payload.error();
      })
    }
  },
})

export const { setFormId, updateAnswer, sendAnswers } = answerSlice.actions

export default answerSlice.reducer