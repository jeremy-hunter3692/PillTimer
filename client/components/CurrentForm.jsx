import React, { useState } from 'react'
// const initialData = { name: '', submitted: 'notthing submitted' }

export default function CurrentForm({
  title,
  handelChange,
  state,
  formName,
  handleSubmit,
}) {
  function localHandleChange(e) {
    handelChange([e.target.name], e.target.value)
  }

  function localHandleSubmit(e) {
    e.preventDefault()
    // console.log('current form:', state)
    handleSubmit(state)
  }

  return (
    <div className="notesInput">
      <form onSubmit={localHandleSubmit}>
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
          name={formName}
          value={state[formName]}
          onChange={localHandleChange}
          size="sm"
        ></textarea>
        <input className="clickMe" type="submit" />
        {/* clear the input feild */}
        <button
          className="clickMe"
          onClick={(e) => {
            e.preventDefault()
            // setData(initialData)
          }}
        >
          Clear text
        </button>
      </form>
    </div>
  )
}
