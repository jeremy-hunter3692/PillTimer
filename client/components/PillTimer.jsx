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
      form.trim().length === 0
        ? console.log('emptystring')
        : setPillName([...pillName, form])
      setForm('')
    }
  }

  function doubleNameCheck(a, b) {
    const one = a.replace(/\s/g, '')
    const two = b.replace(/\s/g, '')
    return one.toUpperCase() === two.toUpperCase() ? true : false
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
      <div className="edit-controls">
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
      </div>
      <div>{alreadyAdded ? <h4>{alreadyAdded} already saved</h4> : ''}</div>
      {pillName.map((x) => {
        return <Pill key={x} props={{ selectedPillName: x }} />
      })}
    </>
  )
}

//TO DO: TIDY UP CONSOLE LOGS
