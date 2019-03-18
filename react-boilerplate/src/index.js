import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd';
import "./App.css"
const App = (props) => {
  return (
    <>
      <h1>{props.data} React Boilerplate</h1>
      <Button type="primary">Button</Button>
    </>
  )
}

ReactDOM.render(
  <App data={'Hello'} />,
  document.getElementById('app')
)