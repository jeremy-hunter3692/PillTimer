import React, { useState } from 'react'
import AddText from './AddText'
import CanvasDraw from 'react-canvas-draw'
import { CirclePicker } from 'react-color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [color, setColor] = useState('blue')
  const [brush, setBrush] = useState(12)
  const changeColor = (e) => {
    setColor(e.hex)
  }

  const [title, setTitle] = useState('title')

  function addText(text) {
    setTitle(text)
  }

  const eraseColor = () => {
    setColor('#ffffff')
  }

  const increaseBrushSize = () => {
    setBrush(brush + 2)
  }

  const decreaseBrushSize = () => {
    brush > 0 ? setBrush(brush - 2) : setBrush(brush)
  }

  let paletteColors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#795548',
    '#607d8b',
  ]

  let saveableCanvas

  return (
    <>
      <header>
        <h1>Easel by Chlorine Cats</h1>
        <div className="titleContainer">
          <AddText addText={addText} title={title} />
        </div>
      </header>
      <section>
        <div className="canvasContainer">
          <CanvasDraw
            brushColor={color}
            brushRadius={brush}
            canvasWidth={800}
            canvasHeight={600}
            hideGridX={true}
            hideGridY={true}
            ref={(canvasDraw) => (saveableCanvas = canvasDraw)}
          />
        </div>
      </section>
      <section className="colors-erasers">
        <div className="palette">
          <h3>Palette</h3>
          <CirclePicker onChange={changeColor} colors={paletteColors} />
        </div>
        <div className="erase-clear">
          <h3>Tools</h3>
          <FontAwesomeIcon
            className="icon"
            icon={faEraser}
            onClick={eraseColor}
          />
          <button
            className="clickMe"
            onClick={() => {
              saveableCanvas.eraseAll()
            }}
          >
            Clear Canvas
          </button>
          <button className="clickMe" onClick={decreaseBrushSize}>
            --
          </button>
          <button className="clickMe" onClick={increaseBrushSize}>
            ++
          </button>
          <label>{brush}</label>
        </div>
      </section>
    </>
  )
}
//style={{'background: transparent none repeat scroll 0% 0%; height: 100%; width: 100%; cursor: pointer; position: relative; outline: currentcolor none medium; border-radius: 50%; box-shadow: rgb(244, 67, 54) 0px 0px 0px 15px inset; transition: box-shadow 100ms ease 0s;'}})

export default App
