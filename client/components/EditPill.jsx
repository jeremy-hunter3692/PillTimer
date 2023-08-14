import React, { useState } from 'react'

export default function EditPill({ pillName, pillFunc }) {
  const [editOnChange, setEditOnChange] = useState('')
  const [form, setForm] = useState('')
  const [displayEditForm, setdisplayEditForm] = useState(false)
  // TOO DO add a change name funciton here?
  //AND/Or on each individual pill

  function handleDeleteChange(e) {
    setEditOnChange(e.target.value)
  }

  function deleteAddedPill(e) {
    e.preventDefault()

    let tempArr = pillName.filter((x) => x !== editOnChange)
    pillFunc(tempArr)
  }

  function editPillName() {
    setdisplayEditForm(!displayEditForm)
  }

  function submitNewPillName(e) {
    e.preventDefault()
    let editIdx = pillName.indexOf(editOnChange)
    let updatedArr = [...pillName]
    updatedArr.splice(editIdx, 1, form)``
    pillFunc(updatedArr)
    setForm('')
  }

  function handleNameChangeForm(e) {
    setForm(e.target.value)
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
          <option key={x} datakey={x} value={x} title="Which pill">
            {x}
          </option>
        ))}
      </select>
      <button onClick={editPillName}>change name</button>
      {displayEditForm && (
        <form onSubmit={submitNewPillName}>
          <input
            name="submitNewPillName"
            type="text"
            value={form}
            onChange={handleNameChangeForm}
          />
          <button onSubmit={submitNewPillName}>Save New Name</button>
        </form>
      )}
      -/-
      <button onClick={deleteAddedPill}>Delete Selected</button>
    </>
  )
}
