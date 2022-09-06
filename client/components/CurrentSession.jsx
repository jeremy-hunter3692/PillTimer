import React, { useState } from 'react'
import AddText from './LastForm'

export default function CurrentSession(props) {
  // const [session, setSession] = useState(initSession)
  // console.log('from currentSesh', props)
  return (
    <>
      <h1>Current Session:</h1>
      <h2>{`Notes for: ${props.state.hour} am/pm on ${props.state.date}`}</h2>
      <div className="formContainer">
        <div className="studentNotes">
          <AddText
            // addFormText={addFormText}
            title="Student Notes"
            handelChange={props.handleChange}
          />
          <br></br>
        </div>
        <div className="teacherNotes">
          <AddText
            // addFormText={addFormText}
            title="Teacher Notes"
            handelChange={props.handleChange}
          />
        </div>
      </div>
    </>
  )
}
