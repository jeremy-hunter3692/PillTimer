import React from 'react'

import Pixel from './Pixel'

const App = () => {
  let array = []
  for (let i = 0; i < 4000; i++) {
    array.push(<Pixel id={i} key={i} />)
  }
  return (
    <>
      <h1>Testing!</h1>
      <div className="canvas">{array}</div>
    </>
  )
}

export default App

//4000 , 80, 50
