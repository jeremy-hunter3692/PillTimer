import { combineReducers } from 'redux'
import currentFormData from './currentFormData'
import lastFormData from './lastFormData'
import students from './students'
import events from './events'

const reducers = combineReducers({
  currentFormData,
  lastFormData,
  students,
  events,
})

export default reducers
