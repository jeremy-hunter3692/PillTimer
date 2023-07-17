import React, { useState } from 'react'
import moment from 'moment'

export default function PillTimer() {
  const [log, setLog] = useState({})
  //const [tramArr, setTramArr] = useState([])
  const [alreadyAdded, setAdded] = useState(null)
  console.log('init', log)
  const [pillName, setPillName] = useState(['Tramadol', 'Panadol', 'Ibuprofen'])
  const [displayPillName, setDisplay] = useState()
  let currentIndex = null

  function deleteButton(x, pillName) {
    return (
      <button
        onClick={(e) => {
          e.preventDefault()
          handleDelete(x, pillName)
        }}
      >
        delete
      </button>
    )
  }

  function handleDelete(time, pillName) {
    console.log('in delete', pillName, time)
    let tempArr = log[pillName].filter((x) => x !== time)
    setLog({ ...log, [pillName]: tempArr })
    setAdded(null)
  }

  function addPillTime(selectedPillName) {
    console.log('inaddPill', selectedPillName)
    //will doing this in two places cause problems?
    let nowString = moment().calendar()

    {
      //checking if array alreqdy exists in state
      if (log[selectedPillName] == undefined) {
        //push a new array to state if it doesnt exist
        let tempArr = []
        tempArr.push(nowString)
        setLog({ ...log, [selectedPillName]: tempArr })
      } else {
        currentIndex = pillName.indexOf(selectedPillName)
        console.log('curent Inedxt', pillName[currentIndex])

        //call functions for preventing double ups
        if (doubleTimeCheck(selectedPillName)) {
          console.log('already added', selectedPillName)
          setAdded(nowString)
          setDisplay(pillName[currentIndex])
          console.log('in double check index is:', currentIndex)
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
    console.log('in dub', selectedPillName, log, log.Ibuprofen)
    let nowString = moment().calendar()
    let index = log[selectedPillName].length - 1
    //console.log('index', index)
    return nowString === log[selectedPillName][index] ? true : false
  }

  function generatePillContent(selectedPillName) {
    console.log('pillContent', selectedPillName)
    return (
      <>
        <h1>You took {selectedPillName} at </h1>
        <button
          // key={pillName}
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
    console.log('listContent', pill)
    //might need to ternary this bcos react
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

  return (
    <>
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
