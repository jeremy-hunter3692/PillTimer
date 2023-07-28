import React from 'react'
import { Routes, Route } from 'react-router-dom'


import NotesDisplay from './NotesDisplay'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NotesDisplay />} />
      </Routes>
    </>
  )
}

export default App
