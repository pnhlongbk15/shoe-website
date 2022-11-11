import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Switch from './Router/Switch'

import { DefaultLayout } from './Layouts'

import { Provider } from 'react-redux'
import store from './Redux/store'

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <DefaultLayout>
          <Switch />
        </DefaultLayout>
      </Provider>
    </Router>
  )
}

export default App
