import { UpdateDisabled } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit'

export const widgetSlice = createSlice({
  name: 'widgets',
  initialState: { 
    current: {},
    all: {
      'root': {
        name: 'root',
        attributes: {},
        styles: {},
        children: []
      }
    }
  },
  reducers: {
    addWidget: (state, action) => {
      state.all[action.payload.name] = action.payload;
      state.all[action.payload.parent].children.push(action.payload);
    },
    delWidget: (state, action) => {
      delete state.all[action.payload.name];
      state.all[action.payload.parent].children = state.all[action.payload.parent].children.filter(child => {
        return child.name !== action.payload.name;
      })
      state.current = {};
    },
    changeParam: (state, action) => {
      const widget_name = action.payload.name;
      const changed_styles = {
        ...state.all[widget_name].styles,
        ...action.payload.styles
      }
      state.all[widget_name].styles = changed_styles;
      state.all[action.payload.parent].children.map(child => {
        if (child.name === action.payload.name) {
          let updated = child;
          updated.styles = changed_styles;
          return updated;
        }
        return child;
      })
      state.current.styles = changed_styles;
    },
    changeValue: (state, action) => {
      state.all[action.payload.name].attributes.value = action.payload.value;
      state.all[action.payload.parent].children.map(child => {
        if (child.name === action.payload.name) {
          let updated = child;
          updated.attributes.value = action.payload.value;
          return updated;
        }
        return child;
      })
      
      if (state.current.attributes) {
        state.current.attributes.value = action.payload.value;
      }
    },
    setCurrentWidget: (state, action) => {
      state.current = action.payload;
    },
    delCurrentWidget: (state) => {
      state.current = {};
    }
  },
})

// Action creators are generated for each case reducer function
export const { addWidget, delWidget, changeParam, changeValue, setCurrentWidget, delCurrentWidget } = widgetSlice.actions

export default widgetSlice.reducer