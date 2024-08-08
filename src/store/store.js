import { configureStore } from '@reduxjs/toolkit'
import widgetReducer from './slices/WidgetSlice'
import userReducer from './slices/UserSlice'
import countReducer from './slices/CountSlice';
import answerReducer from './slices/AnswerSlice'

export default configureStore({
  reducer: {
    widgets: widgetReducer,
    user: userReducer,
    count: countReducer,
    answers: answerReducer,
  },
})

