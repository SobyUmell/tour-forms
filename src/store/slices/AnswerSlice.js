import { createSlice } from '@reduxjs/toolkit'

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
    setAnswer: (state, action) => {
      state.list[action.payload.name] = action.payload.value; 
    },
    resetAnswer: (state, action) => {
      delete state.list[action.payload.name];
    },
    reset: (state, action) => {
      state.list = {}
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFormId, setAnswer, resetAnswer, reset } = answerSlice.actions

export default answerSlice.reducer