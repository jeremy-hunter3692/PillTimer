import React, { useState } from 'react'
import moment from 'moment'

export default function Pill({ props }) {
  const [log, setLog] = useState([])
  const [alreadyAdded, setAdded] = useState(null)
  // const [pillName, setPillName] = useState(['Tramadol', 'Panadol', 'Ibuprofen'])
  // const [displayPillName, setDisplay] = useState('')
  const [form, setForm] = useState('')
  const [deleteChange, setDeleteChange] = useState('')
  //RE LEARN HOW TO DESTRUCTURE PROPS FOR
  const selectedPillName = props.selectedPillName
  console.log('init', props, selectedPillName, 'log', log)

  function generatePillTitles(selectedPillName) {
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
        {generateTimeList(selectedPillName)}
      </>
    )
  }

  //adding time pill is taken
  function addPillTime(selectedPillName) {
    //will doing this in two places cause problems?
    let nowString = moment().calendar()
    let currentIndex = null
    {
      //checking if array alreqdy exists in state
      if (log[0] === undefined) {
        setLog([nowString])
      } else {
        //call function for preventing double ups
        if (doubleTimeCheck(selectedPillName, nowString)) {
          addAndClearText(nowString, currentIndex)
        } else {
          setLog([...log, nowString])
        }
      }
    }
  }

  function doubleTimeCheck(selectedPillName, nowString) {
    let index = log.length - 1
    return nowString === log[index] ? true : false
  }

  function addAndClearText(pillName) {
    //might need to put and or/and to deal with empty string/null situation
    // console.log({ input, index }, pillName[index])
    // let string = null

    // string = index >= 0 ? pillName[index] + ' ' + input : input

    // if (!alreadyAdded.includes(string)) {
    // console.log('str', string)
    setAdded(pillName)
    setTimeout(() => {
      setAdded(null)
    }, 3000)
    // }
    // }
  }

  //time pill taken
  function generateTimeList() {
    return (
      <ul>
        {log.map((x) => (
          <li key={x}>
            {x}
            {deleteButton(x)}
          </li>
        ))}
      </ul>
    )
  }

  function deleteButton(x) {
    return (
      <button
        onClick={(e) => {
          e.preventDefault()
          handleDelete(x)
        }}
      >
        delete
      </button>
    )
  }

  function handleDelete(time) {
    if (log[1]) {
      let tempArr = log.filter((x) => x !== time)
      console.log('temp', tempArr)
      setLog([tempArr])
      setAdded(null)
    } else {
      setLog([])
    }
  }

  function doubleNameCheck(a, b) {
    return a.toUpperCase() === b.toUpperCase() ? true : false
  }

  //form stuff

  // function addNewPill(e) {
  //   e.preventDefault()
  //   // console.log(pillName.find((x) => doubleNameCheck(form, x)))
  //   if (pillName.find((x) => doubleNameCheck(form, x))) {
  //     addAndClearText(form)
  //     setForm('')
  //   } else {
  //     setPillName([...pillName, form])
  //     setForm('')
  //   }
  // }

  // function handleChange(e) {
  //   setForm(e.target.value)
  // }

  // function handleDeleteChange(e) {
  //   setDeleteChange(e.target.value)
  // }

  // function deleteAddedPill(e) {
  //   e.preventDefault()
  //   let input = deleteChange
  //   console.log('deletepill', input)
  //   let tempArr = pillName.filter((x) => x !== input)
  //   setPillName(tempArr)
  //   console.log('delte pill end. temp:', tempArr, 'pillname', pillName)
  // }

  return (
    <>
      {/* <form onSubmit={addNewPill}>
        <input
          name="addNewPill"
          type="text"
          value={form}
          onChange={handleChange}
        />
        <button onSubmit={addNewPill}>Save New Pill</button>
      </form>
    
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
      <button onClick={deleteAddedPill}>Delete</button> */}
      <div>{generatePillTitles(selectedPillName)}</div>
      <div>{alreadyAdded ? <h3> {alreadyAdded} already saved</h3> : ''}</div>
    </>
  )
}
// <h3>{alreadyAdded[0]} already saved</h3> : ''}
//TO DO: TIDY UP CONSOLE LOGS
//Find away to remove the already saved pill -- set timer?
//Change so alert of already added prints a new one each time rather than replacing the old
//each has a timer to remove itselft but can't double up on itself
