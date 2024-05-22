import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { App, Lose} from './clown'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <Lose/>
  </React.StrictMode>,
)
