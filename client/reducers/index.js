import { combineReducers } from 'redux'

import currentFormData from './currentFormData'
import lastFormData from './lastFormData'

const reducers = combineReducers({
  currentFormData,
  lastFormData,
})

export default reducers
