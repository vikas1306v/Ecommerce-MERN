import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/Index.jsx'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
const initialOptions = {
  clientId:"your client id",
  currency: "USD",
  intent: "capture",
};
const options = {

  position: positions.BOTTOM_CENTER,
  timeout: 3000,
  offset: '30px',
  transition: transitions.SCALE
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <AlertProvider template={AlertTemplate} {...options}>
<Provider store={store}>
<PayPalScriptProvider options={initialOptions}>
    <App />
  </PayPalScriptProvider>
</Provider>
</AlertProvider>

)
