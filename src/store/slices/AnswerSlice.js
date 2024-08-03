import { createSlice } from '@reduxjs/toolkit'

export const answerSlice = createSlice({
  name: 'answers',
  initialState: { 
    formId: null,
    list: {

    }
  },
  reducers: {
    setAnswer: (state, action) => {
      state.all[action.payload.name] = action.payload;
      state.all[action.payload.parent].children.push(action.payload.name);
    },
    resetAnswer: (state, action) => {
      delete state.all[action.payload.name];
      state.all[action.payload.parent].children = state.all[action.payload.parent].children.filter(child => {
        return child !== action.payload.name;
      })
      state.current = null;
    },
    reset: (state, action) => {
      const widget_name = action.payload.name;
      const changed_styles = {
        ...state.all[widget_name].styles,
        ...action.payload.styles
      }
      state.all[widget_name].styles = changed_styles;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAnswer, resetAnswer, reset } = answerSlice.actions

export default answerSlice.reducer