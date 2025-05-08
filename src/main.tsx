import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom';  
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
// import 'antd/dist/reset.css'
import 'antd/dist/antd.css';  // antd 4.x 的样式导入
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
