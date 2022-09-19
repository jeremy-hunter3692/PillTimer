import React from 'react'
import { useSelector } from 'react-redux'
export default function LastForm({ title }) {
  const formData = useSelector((state) => state.lastFormData)
  console.log('form data at Last Form', formData.payload)
  return (
    <div className="notesInput">
      <form>
        <label htmlFor={title}>
          <h1>
            <strong>{title}</strong>
          </h1>
        </label>
        <textarea
          className="textBox"
          type="text"
          id={title}
          value={formData.studentNotes}
          name="name"
          size="sm"
          readOnly
        ></textarea>
      </form>
    </div>
  )
}
