import React, { useState } from 'react'

export default function EditPill({ props: pillName, pillFunc }) {
  const [deleteChange, setDeleteChange] = useState('')
  // TOO DO add a change name funciton here?
  //AND/Or on each individual pill

  function handleDeleteChange(e) {
    setDeleteChange(e.target.value)
  }

  function deleteAddedPill(e) {
    e.preventDefault()

    let tempArr = pillName.filter((x) => x !== deleteChange)
    pillFunc(tempArr)
  }

  return (
    <>
      <select
        id="pillSelect"
        name="name"
        onChange={handleDeleteChange}
        required
      >
        <option>Choose Pill</option>

        {pillName.map((x) => (
          <option
            key={x}
            datakey={x}
            value={x}
            title="Which pill"
          >
            {x}
          </option>
        ))}
      </select>
      <button onClick={deleteAddedPill}>Delete</button>
    </>
  )
}
