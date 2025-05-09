import React from 'react'
import {createRoot} from 'react-dom/client'
// import ReactDOM from 'react-dom';  
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
// import 'antd/dist/reset.css'
import 'antd/dist/antd.css';  // antd 4.x 的样式导入
import './index.css'

const  root:any = document.getElementById('root')

createRoot(root).render(
  
    <Provider store={store}>
      <App />
    </Provider>
  
)
