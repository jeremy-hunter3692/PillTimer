import React, { useState } from 'react'
import moment from 'moment'

export default function PillTimer() {
  const [log, setLog] = useState({})
  const [alreadyAdded, setAdded] = useState(null)
  const [pillName, setPillName] = useState(['Tramadol', 'Panadol', 'Ibuprofen'])
  const [displayPillName, setDisplay] = useState()
  const [form, setForm] = useState('')
  // let currentIndex = null
  console.log('init', log)

  function deleteButton(x, selectedPillName) {
    return (
      <button
        onClick={(e) => {
          e.preventDefault()
          handleDelete(x, selectedPillName)
        }}
      >
        delete
      </button>
    )
  }

  function handleDelete(time, selectedPillName) {
    let tempArr = log[selectedPillName].filter((x) => x !== time)
    setLog({ ...log, [selectedPillName]: tempArr })
    setAdded(null)
  }

  function addPillTime(selectedPillName) {
    //will doing this in two places cause problems?
    let nowString = moment().calendar()
    let currentIndex = null
    {
      //checking if array alreqdy exists in state
      if (log[selectedPillName] == undefined) {
        //push a new array to state if it doesnt exist
        let tempArr = []
        tempArr.push(nowString)
        setLog({ ...log, [selectedPillName]: tempArr })
      } else {
        currentIndex = pillName.indexOf(selectedPillName)
        //call functions for preventing double ups
        if (doubleTimeCheck(selectedPillName)) {
          setAdded(nowString)
          setDisplay(pillName[currentIndex])
        } else {
          let tempElseArr = log[selectedPillName]
          tempElseArr.push(nowString)
          //replacing named array with new one.. will it work when more complex object
          setLog({ ...log, [selectedPillName]: tempElseArr })
        }
      }
    }
  }

  function doubleTimeCheck(selectedPillName) {
    let nowString = moment().calendar()
    let index = log[selectedPillName].length - 1
    return nowString === log[selectedPillName][index] ? true : false
  }

  function generatePillContent(selectedPillName) {
    return (
      <>
        <h1>You took {selectedPillName} at </h1>
        <button
          key={selectedPillName}
          className="clickMe"
          onClick={(e) => {
            e.preventDefault()
            addPillTime(selectedPillName)
          }}
        >
          Enter new {selectedPillName}
        </button>
        {generateList(selectedPillName)}
      </>
    )
  }

  function generateList(pill) {
    return (
      <ul>
        {log[pill]?.map((x) => (
          <li key={x}>
            {x}
            {deleteButton(x, pill)}
          </li>
        ))}
      </ul>
    )
  }

  function addNewPill(e) {
    e.preventDefault()
    setPillName([...pillName, form])
    setForm('')
  }

  function handleChange(e) {
    setForm(e.target.value)
  }

  return (
    <>
      <form onSubmit={addNewPill}>
        <input
          name="addNewPill"
          type="text"
          value={form}
          onChange={handleChange}
        />
        <button onSubmit={addNewPill}>Save New Pill</button>
      </form>

      <div>
        {pillName.map((x) => {
          return generatePillContent(x)
        })}
      </div>
      {alreadyAdded ? (
        <h3>
          {displayPillName} {alreadyAdded} already saved
        </h3>
      ) : (
        ''
      )}
    </>
  )
}
//TO DO: TIDY UP CONSOLE LOGS
//CLEAR FORM - REACT FORMS
