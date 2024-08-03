import { configureStore } from '@reduxjs/toolkit'
import widgetReducer from './slices/WidgetSlice'
import userReducer from './slices/UserSlice'
import answerReducer from './slices/AnswerSlice';

export default configureStore({
  reducer: {
    widgets: widgetReducer,
    user: userReducer,
    answers: answerReducer,
  },
})

