import React, { useState } from 'react'
import CurrentForm from './CurrentForm'

export default function CurrentSession(props) {
  // console.log('cuurnet', props.state)
  return (
    <>
      <h1>Current Session:</h1>
      <h2>{`Notes for: ${props.state.hour} am/pm on ${props.state.date}`}</h2>
      <div className="formContainer">
        <div className="studentNotes">
          <CurrentForm
            // addFormText={addFormText}
            title="Student Notes"
            handelChange={props.handleChange}
            formText={props.state.studentNotes}
            state={props.state}
            formName="studentNotes"
            handleSubmit={props.handleSubmit}
          />
          <br></br>
        </div>
        <div className="teacherNotes">
          <CurrentForm
            // addFormText={addFormText}
            title="Teacher Notes"
            handelChange={props.handleChange}
            formText={props.state.teacherNotes}
            state={props.state}
            formName="teacherNotes"
            handleSubmit={props.handleSubmit}
          />
        </div>
      </div>
    </>
  )
}
