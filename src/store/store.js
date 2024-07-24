import { configureStore } from '@reduxjs/toolkit'
import widgetReducer from './slices/WidgetSlice'

export default configureStore({
  reducer: {
    widgets: widgetReducer,
  },
})