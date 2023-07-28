import React, { useState } from 'react'

export default function EditPill({ props: pillName, pillFunc }) {
  const [deleteChange, setDeleteChange] = useState('')

  // const { pillName } = props
  console.log('in edit. Pill:', pillName, 'func', pillFunc)

  function handleDeleteChange(e) {
    setDeleteChange(e.target.value)
  }

  function deleteAddedPill(e) {
    e.preventDefault()
    // let input = deleteChange
    let tempArr = pillName.filter((x) => x !== deleteChange)
    pillFunc(tempArr)
  }

  return (
    <>
      <h1>Edit Pill</h1>
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
            //added so we can extract the student id property dunno if we need this
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
