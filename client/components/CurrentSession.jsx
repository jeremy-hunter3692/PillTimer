import React from 'react'
import Form from './Form'
import moment from 'moment'
import { useSelector } from 'react-redux'

export default function CurrentSession() {
  let formData = useSelector((state) => state.currentFormData)
  const start = moment(formData?.start)?.format('hh a')
  const end = moment(formData?.end)?.format('DD MM YYYY')
  const name = formData?.name || 'No lesson at this time'
  // console.log('formData', formData)
  return (
    <>
      <h1>Current Session:</h1>
      <h2>{`Notes for ${name} at ${start} on the ${end}`}</h2>
      <div className="formContainer">
        <div className="studentNotes">
          <Form
            title="Student Notes"
            formName="studentNotes"
            state={formData}
            value={formData?.studentNotes}
            buttonBool={true}
            onChangeBool={true}
          />
          <br></br>
        </div>
        <div className="teacherNotes">
          <Form
            title="Teacher Notes"
            formName="teacherNotes"
            state={formData}
            value={formData?.teacherNotes}
            buttonBool={false}
            onChangeBool={true}
          />
        </div>
      </div>
    </>
  )
}
