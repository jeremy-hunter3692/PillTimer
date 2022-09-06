import React, { useState } from 'react'
// const initialData = { name: '', submitted: 'notthing submitted' }

export default function LastForm({ title, handelChange, state }) {
  const [data, setData] = useState(state)
  console.log('1', data)
  // state ? (data.studentNotes = state.studentNotes) : console.log('wait')
  console.log(data)

  // let { studentNotes } = state.studentNotes

  function localHandleChange(e) {
    setData({ ...data, studentNotes: e.target.value })
    handelChange(data)
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
              {title}
              {/* {data.submitted} */}
            </strong>
          </h1>
        </label>
        <textarea
          className="textBox"
          type="text"
          id={title}
          name="name"
          value={data.studentNotes}
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
