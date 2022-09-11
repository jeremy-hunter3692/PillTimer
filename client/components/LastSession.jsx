import React from 'react'
import LastForm from './LastForm'
export default function LastSession(props) {
  return (
    <>
      <h1>Last Session</h1>
      <h2>{`Notes for: ${props.state.hour} am/pm on ${props.state.date}`}</h2>
      <div className="formContainer">
        <div className="studentNotes">
          <LastForm value={props.state.studentNotes} />
          <br></br>
        </div>
        <div className="teacherNotes">
          <LastForm value={props.state.teacherNotes} />
        </div>
      </div>
    </>
  )
}
