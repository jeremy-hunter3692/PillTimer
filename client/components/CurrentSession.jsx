import React, { useState } from 'react'
import LastForm from './LastForm'

export default function CurrentSession(props) {
  // console.log('cuurnet', props.state)
  return (
    <>
      <h1>Current Session:</h1>
      <h2>{`Notes for: ${props.state.hour} am/pm on ${props.state.date}`}</h2>
      <div className="formContainer">
        <div className="studentNotes">
          <LastForm
            // addFormText={addFormText}
            title="Student Notes"
            handelChange={props.handleChange}
            state={props.state}
          />
          <br></br>
        </div>
        <div className="teacherNotes">
          <LastForm
            // addFormText={addFormText}
            title="Teacher Notes"
            handelChange={props.handleChange}
            state={props.state}
          />
        </div>
      </div>
    </>
  )
}
