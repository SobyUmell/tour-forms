import { createSlice } from '@reduxjs/toolkit'
import { root_default } from '../../constants/default';
import { deleteObject } from 'firebase/storage';
import deleteAllMedia from '../../scripts/backend/deleteAllMedia';
import convertTreeToArray from '../../scripts/helpers/convertTreeToArray';
import uuid from 'react-uuid';
export const widgetSlice = createSlice({
  name: 'widgets',
  initialState: { 
    name: `form_${uuid()}`,
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
            size: false,
            space: true,
            value: false,
            input: false,
          },
          media: {}
        },
        styles: root_default,
        children: []
      }
    },
  },
  reducers: {
    defineNewState: (state, action) => {
      state.current = null;
      state.name = `form_${uuid()}`;
      state.all = convertTreeToArray(action.payload);
    },
    resetState: (state) => {
      state.current = null;
      state.name = `form_${uuid()}`;
      state.all = {
        'root': {
          name: 'root',
          attributes: {
            groups: {
              bcg: true,
              border: true,
              flex: true,
              font: false,
              size: false,
              space: true,
              value: false,
              input: false,
            },
            media: {}
          },
          styles: root_default,
          children: []
        }
      };
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
    addWidget: (state, action) => {
      state.all[action.payload.name] = action.payload;
      state.all[action.payload.parent].children.push(action.payload.name);
    },
    delWidget: (state, action) => {
      if (state.all['root'].attributes.media[action.payload.name]) {
        deleteObject(state.all['root'].attributes.media[action.payload.name]).then(() => {
          console.log('the file is deleted using ref in delWidget');
        }).catch((error) => {
          console.log(error);
        });
      }
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
      // state.media[action.payload.name] = action.payload.ref;
      state.all['root'].attributes.media[action.payload.name] = action.payload.ref;
    },
    deleteMedia: (state, action) => {
      const refs = Object.values(state.all['root'].attributes.media);
      deleteAllMedia(refs)
      .then(() => {
        action.payload.success();
      })
      .catch((error) => {
        action.payload.error(error);
      })
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
export const { defineNewState, resetState, changeName, addWidget, delWidget, changeParam, changeValue, changePlaceholder, setMediaRef, deleteMedia, setCurrentWidget, delCurrentWidget } = widgetSlice.actions

export default widgetSlice.reducer