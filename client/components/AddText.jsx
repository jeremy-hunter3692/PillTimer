import React, { useState } from 'react'

const initialData = { name: ' ', submitted: 'nothing submitted' }

export default function AddText({ addText, title }) {
  const [data, setData] = useState(initialData)
  //const name = data.name
  const { name } = data

  //Changes text in the form
  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  //Submits the form text contents when the submit button is clicked
  function handleSubmit(e) {
    e.preventDefault()
    addText(name)
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
          onChange={handleChange}
          size="sm"
          placeholder={title}
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
