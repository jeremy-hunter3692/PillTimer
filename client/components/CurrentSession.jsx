import React from 'react'
import CurrentForm from './CurrentForm'
import { useSelector } from 'react-redux'
import currentForm from '../reducers/currentFormData'

export default function CurrentSession(props) {
  const formData = useSelector((state) => state.currentFormData)

  return (
    <>
      <h1>Current Session:</h1>
      <div className="formContainer">
        <div className="studentNotes">
          <CurrentForm
            title="Student Notes"
            formName="studentNotes"
            state={formData}
            value={formData.studentNotes}
            handleSubmit={props.handleSubmit}
            bool={true}
          />
          <br></br>
        </div>
        <div className="teacherNotes">
          <CurrentForm
            title="Teacher Notes"
            formName="teacherNotes"
            state={formData}
            value={formData.teacherNotes}
            handleSubmit={props.handleSubmit}
            bool={true}
          />
        </div>
      </div>
    </>
  )
}
