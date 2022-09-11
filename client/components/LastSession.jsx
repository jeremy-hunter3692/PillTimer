import React from 'react'
import LastForm from './LastForm'
export default function LastSession(props) {
  return (
    <>
      <div className="formContainer">
        <div className="studentNotes">
          <LastForm value={props.state.studentNotes} title="Student Notes" />
          <br></br>
        </div>
        <div className="teacherNotes">
          <LastForm value={props.state.teacherNotes} title="Teacher Notes" />
        </div>
      </div>
    </>
  )
}
