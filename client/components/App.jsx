import React, { useState } from 'react'
import AddText from './AddText'
import Nav from './Nav'
import { addSession, getSessionById } from '../apiClient'

const student = 'studenttemp'
const date = 'datetemp'

const App = () => {
  const [sessionInfo, setSessionInfo] = useState(
    `notes for ${student} on ${date}`
  )

  function addText(notes) {
    addSession(notes)
  }

  return (
    <>
      <Nav />

      <div className="formContainer">
        <h2>{sessionInfo}</h2>
        <div className="studentNotes">
          <AddText addText={addText} title="Student Notes" />
          <br></br>
        </div>
        <div className="teacherNotes">
          <AddText addText={addText} title="Teacher Notes" />
        </div>
      </div>
    </>
  )
}
//style={{'background: transparent none repeat scroll 0% 0%; height: 100%; width: 100%; cursor: pointer; position: relative; outline: currentcolor none medium; border-radius: 50%; box-shadow: rgb(244, 67, 54) 0px 0px 0px 15px inset; transition: box-shadow 100ms ease 0s;'}})

export default App
