import React from 'react'
//read up about reactDom.render vsjust render
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
//config store??

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
