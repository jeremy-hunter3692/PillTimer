import React, { useState } from 'react'
import moment from 'moment'

export default function Pill({ props }) {
  const [log, setLog] = useState([])
  const [alreadyAdded, setAdded] = useState(null)
  const { selectedPillName } = props
  console.log('init', props, selectedPillName, 'log', log)

  function generatePillTitles(selectedPillName) {
    return (
      <>
        <h1>You took {selectedPillName} at </h1>
        <button
          key={selectedPillName}
          className="pillButton"
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
    setAdded(pillName)
    setTimeout(() => {
      setAdded(null)
    }, 3000)
  }

  //time pill taken
  function generateTimeList() {
    return (
    <div className='pillList'>
      <ul>
        {log.map((x) => (
          <li key={x}>
            {x}
            {deleteButton(x)}
          </li>
        ))}
      </ul>
      </div>
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

  return (
    <>
      <div>{generatePillTitles(selectedPillName)}</div>
      <div>{alreadyAdded ? <h3> {alreadyAdded} already saved</h3> : ''}</div>
    </>
  )
}
