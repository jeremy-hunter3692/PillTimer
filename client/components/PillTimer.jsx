import React, { useState } from 'react'
import Pill from './Pill.jsx'
import moment from 'moment'

export default function PillTimer() {
  const [log, setLog] = useState({})
  const [alreadyAdded, setAdded] = useState([])
  const [pillName, setPillName] = useState(['Tramadol', 'Panadol', 'Ibuprofen'])
  // const [displayPillName, setDisplay] = useState('')
  const [form, setForm] = useState('')
  const [deleteChange, setDeleteChange] = useState('')
  // const [timerCurrent, setTimerCurrent] = useState(false)
  console.log('init', alreadyAdded)

  //adding time pill is taken
  // function addPillTime(selectedPillName) {
  //   //will doing this in two places cause problems?
  //   let nowString = moment().calendar()
  //   let currentIndex = null
  //   {
  //     //checking if array alreqdy exists in state
  //     if (log[selectedPillName] === undefined) {
  //       setLog({ ...log, [selectedPillName]: [nowString] })
  //     } else {
  //       currentIndex = pillName.indexOf(selectedPillName)
  //       //call function for preventing double ups
  //       if (doubleTimeCheck(selectedPillName, nowString)) {
  //         addAndClearText(nowString, currentIndex)
  //       } else {
  //         let tempArr = log[selectedPillName]
  //         tempArr.push(nowString)
  //         setLog({ ...log, [selectedPillName]: tempArr })
  //       }
  //     }
  //   }
  // }

  // function addAndClearText(input, index = null) {
  //   //might need to put and or/and to deal with empty string/null situation
  //   // console.log({ input, index }, pillName[index])

  //   let string = null

  //   string = index >= 0 ? pillName[index] + ' ' + input : input

  //   if (!alreadyAdded.includes(string)) {
  //     // console.log('str', string)
  //     setAdded([...alreadyAdded, string])
  //     setTimeout(() => {
  //       let temp = alreadyAdded.filter((x) => x != string)
  //       console.log('1st', temp)
  //       setAdded(temp)
  //     }, 4000)
  //   } else {
  //     console.log('already added to already added')
  //   }
  // }

  // function deleteButton(x, selectedPillName) {
  //   return (
  //     <button
  //       onClick={(e) => {
  //         e.preventDefault()
  //         handleDelete(x, selectedPillName)
  //       }}
  //     >
  //       delete
  //     </button>
  //   )
  // }

  // function generatePillTitles(selectedPillName) {
  //   return (
  //     <>
  //       <h1>You took {selectedPillName} at </h1>
  //       <button
  //         key={selectedPillName}
  //         className="clickMe"
  //         onClick={(e) => {
  //           e.preventDefault()
  //           addPillTime(selectedPillName)
  //         }}
  //       >
  //         Enter new {selectedPillName}
  //       </button>
  //       {generateTimeList(selectedPillName)}
  //     </>
  //   )
  // }
  //time pill taken
  // function generateTimeList(pill) {
  //   return (
  //     <ul>
  //       {log[pill]?.map((x) => (
  //         <li key={x}>
  //           {x}
  //           {deleteButton(x, pill)}
  //         </li>
  //       ))}
  //     </ul>
  //   )
  // }

  // function doubleTimeCheck(selectedPillName, nowString) {
  //   let index = log[selectedPillName].length - 1
  //   return nowString === log[selectedPillName][index] ? true : false
  // }

  function doubleNameCheck(a, b) {
    return a.toUpperCase() === b.toUpperCase() ? true : false
  }

  function handleDelete(time, selectedPillName) {
    let tempArr = log[selectedPillName].filter((x) => x !== time)
    setLog({ ...log, [selectedPillName]: tempArr })
    setAdded(null)
  }

  //form stuff

  function addNewPill(e) {
    e.preventDefault()
    // console.log(pillName.find((x) => doubleNameCheck(form, x)))
    if (pillName.find((x) => doubleNameCheck(form, x))) {
      addAndClearText(form)
      setForm('')
    } else {
      setPillName([...pillName, form])
      setForm('')
    }
  }

  function handleChange(e) {
    setForm(e.target.value)
  }

  function handleDeleteChange(e) {
    setDeleteChange(e.target.value)
  }

  function deleteAddedPill(e) {
    e.preventDefault()
    let input = deleteChange
    console.log('deletepill', input)
    let tempArr = pillName.filter((x) => x !== input)
    setPillName(tempArr)
    console.log('delte pill end. temp:', tempArr, 'pillname', pillName)
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
      {/* drop down for deleting existing pills*/}
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
      {pillName.map((x) => {
        return <Pill key={x} props={{ selectedPillName: x }} />
      })}

      <div>
        {alreadyAdded[0]
          ? alreadyAdded.map((x) => {
              return <h3 key={x}>{x} already saved</h3>
            })
          : ''}
      </div>
    </>
  )
}
// <h3>{alreadyAdded[0]} already saved</h3> : ''}
//TO DO: TIDY UP CONSOLE LOGS
//Find away to remove the already saved pill -- set timer?
//Change so alert of already added prints a new one each time rather than replacing the old
//each has a timer to remove itselft but can't double up on itself
