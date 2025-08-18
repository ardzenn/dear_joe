import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '../App'
import Layout from '../Layout.jsx'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
)


