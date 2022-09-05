import React, { useState } from 'react'
import AddText from './AddText'
const initSession = {
  date: 'none loaded',
  hour: 0,
  studentNotes: 'none Loaded',
  teacherNotes: 'none Loaded',
}
export default function CurrentSession(props) {
  const [session, setSession] = useState(initSession)

  return (
    <>
      <h1>Current Session:</h1>
      <div className="formContainer">
        <h2>{`Notes for: ${session.hour} am/pm on ${session.date}`}</h2>
        <div className="studentNotes">
          <AddText
            // addFormText={addFormText}
            title="Student Notes"
            sessionNotes={session.studentNotes}
          />
          <br></br>
        </div>
        <div className="teacherNotes">
          <AddText
            // addFormText={addFormText}
            title="Teacher Notes"
            sessionNotes={session.teacherNotes}
          />
        </div>
      </div>
    </>
  )
}
