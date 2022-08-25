import React, { useState } from 'react'

const initialData = { name: '' }

export default function AddText({ addText }) {
  const [data, setData] = useState(initialData)
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
    addText(data)
    setData(initialData)
  }

  return (
    <div>
      <h3>Add Text</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <input type="submit" />
        <button
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
