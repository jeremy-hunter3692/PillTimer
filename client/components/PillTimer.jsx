import React, { useState } from 'react'
import Pill from './Pill.jsx'
import EditPill from './EditPill.jsx'

export default function PillTimer() {
  const [alreadyAdded, setAdded] = useState()
  const [pillName, setPillName] = useState(['Tramadol', 'Panadol', 'Ibuprofen'])
  const [form, setForm] = useState('')
  const [showEdit, setShowEdit] = useState(false)
  // console.log('init', alreadyAdded)

  function addNewPill(e) {
    e.preventDefault()
    if (pillName.find((x) => doubleNameCheck(form, x))) {
      setAdded(form)
      setForm('')
      setTimeout(() => {
        setAdded(null)
      }, 4000)
    } else {
      setPillName([...pillName, form])
      setForm('')
    }
  }

  function doubleNameCheck(a, b) {
    return a.toUpperCase() === b.toUpperCase() ? true : false
  }

  function handleChange(e) {
    setForm(e.target.value)
  }
  //to pass to edit modal
  function setPillPropFunc(input) {
    setPillName(input)
  }

  return (
    <>
      <div>{alreadyAdded ? <h4>{alreadyAdded} already addded</h4> : ''}</div>
      <form onSubmit={addNewPill}>
        <input
          name="addNewPill"
          type="text"
          value={form}
          onChange={handleChange}
        />
        <button onSubmit={addNewPill}>Save New Pill</button>
      </form>
      <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
      {showEdit && <EditPill props={pillName} pillFunc={setPillPropFunc} />}
      {pillName.map((x) => {
        return <Pill key={x} props={{ selectedPillName: x }} />
      })}
    </>
  )
}

//TO DO: TIDY UP CONSOLE LOGS
