import React, { useState } from 'react'

import { Routes, Route } from 'react-router-dom'

import AddText from './AddText'

function App() {
  const [title, setTitle] = useState('title')

  function addText(text) {
    setTitle(text)
  }
  return (
    <>
      <h1>{title}</h1>
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={<AddText addText={addText} title={title} />}
          />
        </Routes>
      </div>
    </>
  )
}

export default App
