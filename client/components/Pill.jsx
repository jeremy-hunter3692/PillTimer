import React, { useState } from 'react'
import moment from 'moment'

export default function Pill({ props }) {
  const [log, setLog] = useState([])
  const [alreadyAdded, setAdded] = useState(null)
  const [edit, setEdit] = useState(false)

  const { selectedPillName } = props
  const numbers = Array(10)
    .fill(0)
    .map((_, idx) => idx + 1)
  
  // console.log('init log', log)

  function generatePillTitles(selectedPillName) {
    return (
      <>
        <h2>You took {selectedPillName} at </h2>
        <div className="pill-names">
          <button
            key={selectedPillName}
            className="pill-button"
            onClick={(e) => {
              e.preventDefault()
              addPillTime(selectedPillName)
            }}
          >
            New {selectedPillName}
          </button>
          {generateTimeList(selectedPillName)}
        </div>
      </>
    )
  }

  //adding time pill is taken
  function addPillTime(selectedPillName) {
    let nowString = moment().format('h' + ':' + 'mm a')
    let currentIndex = null
    setEdit(false)
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
    setAdded(pillName)
    setTimeout(() => {
      setAdded(null)
    }, 3000)
  }

  //time pill taken
  function generateTimeList() {
    return (
      <>
        <div className="pill-list">
          <ul>
            {log.map((x) => (
              <li key={x}>
                {x} How many?
                <select className="pill-dropdowns">
    
                  <option value="" disabled>
                    Amount taken
                  </option>
                  {numbers.map((x) => (
                    <option key={x} value={x} title="Choose a track">
                      {x}
                    </option>
                  ))}
                </select>
                {deleteButton(x)}
              </li>
            ))}
          </ul>
          {alreadyAdded ? <h4> {alreadyAdded} already saved</h4> : ''}
        </div>
        <button
          key={edit}
          onClick={(e) => {
            e.preventDefault()
            setEdit(!edit)
          }}
        >
          Edit
        </button>
      </>
    )
  }

  function deleteButton(x) {
    return (
      <button
        style={edit ? { visibility: 'visible' } : { visibility: 'hidden' }}
        onClick={(e) => {
          e.preventDefault()
          handleDelete(x)
        }}
      >
        Delete
      </button>
    )
  }

  function handleDelete(time) {
    if (log[1]) {
      let tempArr = log.filter((x) => x !== time)
      setLog(tempArr)
      setAdded(null)
    } else {
      setLog([])
    }
  }

  return (
    <>
      <div className="pill-container">
        <div> {generatePillTitles(selectedPillName)}</div>
      </div>
    </>
  )
}
