import { combineReducers } from 'redux'
import currentFormData from './currentFormData'
import lastFormData from './lastFormData'
import students from './students'
import events from './events'
import errMessage from './errMessage'

const reducers = combineReducers({
  currentFormData,
  lastFormData,
  students,
  events,
  errMessage,
})

export default reducers
