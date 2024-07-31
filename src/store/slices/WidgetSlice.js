import { UpdateDisabled } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit'
import { root_default } from '../../constants/default';

export const widgetSlice = createSlice({
  name: 'widgets',
  initialState: { 
    current: null,
    all: {
      'root': {
        name: 'root',
        attributes: {
          groups: {
            bcg: true,
            border: true,
            flex: true,
            font: false,
            size: true,
            space: true,
            value: false,
            input: false,
          }
        },
        styles: root_default,
        children: []
      }
    },
    media: {}
  },
  reducers: {
    addWidget: (state, action) => {
      state.all[action.payload.name] = action.payload;
      state.all[action.payload.parent].children.push(action.payload.name);
    },
    delWidget: (state, action) => {
      delete state.all[action.payload.name];
      state.all[action.payload.parent].children = state.all[action.payload.parent].children.filter(child => {
        return child !== action.payload.name;
      })
      state.current = null;
    },
    changeParam: (state, action) => {
      const widget_name = action.payload.name;
      const changed_styles = {
        ...state.all[widget_name].styles,
        ...action.payload.styles
      }
      state.all[widget_name].styles = changed_styles;
    },
    changeValue: (state, action) => {
      state.all[action.payload.name].attributes.value = action.payload.value;
    },
    changePlaceholder: (state, action) => {
      state.all[action.payload.name].attributes.placeholder = action.payload.placeholder;
    },
    setMediaRef: (state, action) => {
      state.media[action.payload.name] = action.payload.ref;
    },
    resetMediaRef: (state, action) => {
      if (state.media[action.payload.name]) {
        delete state.media[action.payload.name];
      }
    },
    setCurrentWidget: (state, action) => {
      state.current = action.payload;
    },
    delCurrentWidget: (state) => {
      state.current = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addWidget, delWidget, changeParam, changeValue, changePlaceholder, setMediaRef, setCurrentWidget, delCurrentWidget } = widgetSlice.actions

export default widgetSlice.reducer