import React from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  return (
    <h1>{props.data} React Boilerplate</h1>
  )
}

ReactDOM.render(
  <App data={'Hello'} />,
  document.getElementById('app')
)