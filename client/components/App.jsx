import React, { useState } from 'react'
import AddText from './AddText'
import AddColor from './AddColor'
import CanvasDraw from 'react-canvas-draw'
import { CirclePicker } from 'react-color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser } from '@fortawesome/free-solid-svg-icons'

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

const App = () => {
  const [color, setColor] = useState('blue')
  const [brush, setBrush] = useState(12)

  const changeColor = (e) => {
    setColor(e.hex)
  }

  const [title, setTitle] = useState('Your artwork title here...')

  const [newColor, setNewColor] = useState(paletteColors)

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

  let saveableCanvas

  function addColor(colorHex) {
    let check = newColor.find((x) => x === colorHex)
    if (check == undefined && colorHex != '') {
      setNewColor([...newColor, colorHex])
    }
  }

  return (
    <>
      <header>
        <h1>Easel by Chlorine Cats</h1>
        <h2>{title}</h2>
      </header>
      <div className="big-container">
        <section className="container">
          <div className="form">
            <h3>Name your Artwork:</h3>
            <AddText addText={addText} title={title} />
            <br></br>
            <h3>Add a new hex colour:</h3>
            <AddColor addColor={addColor} />
          </div>
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
          <section>
            <div className="palette">
              <h3>Palette</h3>
              <CirclePicker onChange={changeColor} colors={newColor} />
            </div>
            <div className="erase-clear">
              <h3>Tools</h3>
              <div className="tools">
                <div className="row">
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
                    Clear All
                  </button>
                </div>
                <div className="row">
                  <button className="clickMe" onClick={decreaseBrushSize}>
                    smaller
                  </button>
                  <button className="clickMe" onClick={increaseBrushSize}>
                    bigger
                  </button>
                </div>
                <div className="row">
                  <label>Brush Size: {brush}</label>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  )
}
//style={{'background: transparent none repeat scroll 0% 0%; height: 100%; width: 100%; cursor: pointer; position: relative; outline: currentcolor none medium; border-radius: 50%; box-shadow: rgb(244, 67, 54) 0px 0px 0px 15px inset; transition: box-shadow 100ms ease 0s;'}})

export default App
