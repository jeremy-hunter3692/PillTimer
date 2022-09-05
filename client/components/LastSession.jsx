import React, { useEffect, useState } from 'react'
import AddText from './AddText'
import { getAllSessions } from '../apiClient'
export default function LastSession(props) {
  const [session, setSession] = useState({})

  useEffect(() => {
    getAllSessions()
      .then((data) => {
        setSession(data[0])
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <h1>Last Session:</h1>
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
