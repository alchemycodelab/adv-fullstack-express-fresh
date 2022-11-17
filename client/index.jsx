require('./main.css')
const React = require('react')
const { createRoot } = require('react-dom/client')

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <span> hi from react</span>
  </React.StrictMode>
)