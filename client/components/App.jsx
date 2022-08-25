import React, { useState } from 'react'
import CanvasDraw from 'react-canvas-draw'
import { CirclePicker } from 'react-color'

const App = () => {
  const [color, setColor] = useState('blue')
  const changeColor = (e) => {
    setColor(e.hex)
    console.log(e)
  }
  return (
    <>
      <div className="canvas">
        <h1>Testing!</h1>
        <CanvasDraw brushColor={color} />
      </div>
      <CirclePicker onChange={changeColor} />
    </>
  )
}

export default App
