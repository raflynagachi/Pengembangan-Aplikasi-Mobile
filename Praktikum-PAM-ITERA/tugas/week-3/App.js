import React  from 'react'
import Apps from './src/components'
import {Provider} from 'react-redux'
import Store from './src/redux/store'
const App = () => {
  
  return (
    <Provider store={Store}>
      <Apps />
   </Provider>
  )
}

export default App
