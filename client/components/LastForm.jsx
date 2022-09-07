import React, { useState } from 'react'
// const initialData = { name: '', submitted: 'notthing submitted' }

export default function CurrentForm({ title, value }) {
  // function localHandleChange(e) {
  //   setData({ ...data, studentNotes: e.target.value })
  //   handelChange(data)
  // }

  //Submits the form text contents when the submit button is clicked

  return (
    <div className="notesInput">
      <form>
        <label htmlFor={title}>
          <h1>
            <strong>
              {title}
              {/* {data.submitted} */}
            </strong>
          </h1>
        </label>
        <textarea
          className="textBox"
          type="text"
          id={title}
          value={value}
          name="name"
          size="sm"
        ></textarea>
      </form>
    </div>
  )
}
