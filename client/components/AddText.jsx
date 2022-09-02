import React, { useState } from 'react'

const initialData = { name: '', submitted: 'nothing submitted' }

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
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={title}>
          <h1>
            <strong>
              {title} {data.submitted}
            </strong>
          </h1>
        </label>

        <div>
          {/* <label htmlFor="notes">
            <strong>{title} </strong>
          </label> */}
          <textarea
            type="text"
            id={title}
            name="name"
            value={name}
            onChange={handleChange}
            size="sm"
            placeholder={title}
          ></textarea>
        </div>
        <input className="clickMe" type="submit" />
        <button
          className="clickMe"
          onClick={(e) => {
            e.preventDefault()
            setData(initialData)
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}
