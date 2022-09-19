import React from 'react'
import LastForm from './LastForm'
export default function LastSession(props) {
  return (
    <>
      <h1>Last Session:</h1>
      <div className="formContainer">
        <div className="studentNotes">
          <LastForm title="Student Notes" />
          <br></br>
        </div>
        <div className="teacherNotes">
          {/* <LastForm value={props.state.teacherNotes} title="Teacher Notes" /> */}
        </div>
      </div>
    </>
  )
}
