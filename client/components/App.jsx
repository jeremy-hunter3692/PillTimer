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
        <Routes>
          <Route path="/" element={<AddText addText={addText} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
