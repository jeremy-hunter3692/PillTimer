import React, { useState } from 'react'
const initialData = { name: '', submitted: 'notthing submitted' }

export default function LastForm({ title, value, handelChange }) {
  const [data, setData] = useState(initialData)
  //const name = data.name
  let { name } = data

  // console.log(data)

  function localHandleChange(e) {
    handelChange(data, e.target.name, e.target.value)
  }

  //Submits the form text contents when the submit button is clicked
  function handleSubmit(e) {
    e.preventDefault()
    // addFormText(name)
    setData({ ...initialData, submitted: 'submitted' })
  }

  return (
    <div className="notesInput">
      <form onSubmit={handleSubmit}>
        <label htmlFor={title}>
          <h1>
            <strong>
              {title} {data.submitted}
            </strong>
          </h1>
        </label>
        <textarea
          className="textBox"
          type="text"
          id={title}
          name="name"
          value={name}
          onChange={localHandleChange}
          size="sm"
        ></textarea>
        <input className="clickMe" type="submit" />
        {/* clear the input feild */}
        <button
          className="clickMe"
          onClick={(e) => {
            e.preventDefault()
            setData(initialData)
          }}
        >
          Clear text
        </button>
      </form>
    </div>
  )
}
