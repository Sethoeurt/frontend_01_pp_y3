// from installed dependencies 
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

// from app.jsx  
import App from './App.jsx'

// from redux store to provide global state access 
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      < App />
    </Provider>
  </React.StrictMode>,
)
