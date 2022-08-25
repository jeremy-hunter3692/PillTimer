import React, { useState } from 'react'

import { Routes, Route } from 'react-router-dom'

import AddText from './AddText'

function App() {
  const [title, setTitle] = useState('title')

  function addText({ text }) {
    setTitle({ ...title, text })
  }
  return (
    <>
      <div className="main">
        <AddText addText={addText} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
