import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'

import NotesDisplay from './NotesDisplay'
import AddingEvents from './AddingEvents'
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<NotesDisplay />} />
        <Route path="/Calendar" element={<AddingEvents />} />
      </Routes>
    </>
  )
}

export default App
