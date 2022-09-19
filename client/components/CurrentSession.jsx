import React from 'react'
import CurrentForm from './CurrentForm'

export default function CurrentSession(props) {
  return (
    <>
      <h1>Current Session:</h1>
      <div className="formContainer">
        <div className="studentNotes">
          <CurrentForm
            title="Student Notes"
            // handelChange={props.handleChange}
            // formText={props.state.studentNotes}
            // state={props.state}
            // formName="studentNotes"
            // handleSubmit={props.handleSubmit}
            // bool={true}
          />
          <br></br>
        </div>
        {/* <div className="teacherNotes">
          <CurrentForm
            title="Teacher Notes"
            // handelChange={props.handleChange}
            // formText={props.state.teacherNotes}
            // state={props.state}
            // formName="teacherNotes"
            // handleSubmit={props.handleSubmit}
            // bool={false}
          />
        </div> */}
      </div>
    </>
  )
}
