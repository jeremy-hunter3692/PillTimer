import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Students from './Students.jsx'
import NotesDisplay from './NotesDisplay'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<NotesDisplay />} />
        <Route path="/Calendar" element={<Students />} />
      </Routes>
    </>
  )
}

export default App
