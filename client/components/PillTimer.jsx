import React, { useState } from 'react'
import moment from 'moment'

export default function PillTimer() {
  const [log, setLog] = useState({})
  const [tramArr, setTramArr] = useState([])
  const [alreadyAdded, setAdded] = useState(null)
  console.log(log)
  let pillName = 'Tramadol'
  //TODOO: make it so you can re use the same code for different pillnames
  //ie swap out tramArr for a variable?? Can you create state like that-array of arrays I guess?
  //make and Add pill button?

  function deleteButton(x) {
    //return button with an in built call to delete function passing in the time to find list item in stateful array
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
    setTramArr((x) => {
      return x.filter((x) => x !== time)
    })
    setAdded(null)
  }

  function doubleTimeCheck(pillName) {
    console.log('in dub', log[pillName])
    let nowString = moment().calendar()
    let index = log[pillName].length - 1
    console.log('index', index)
    return nowString === log[pillName][index] ? true : false
  }

  function timeNow(pillName) {
    //will doing this in two places cause problems?
    let nowString = moment().calendar()

    {
      //checking if array alreqdy exists in state
      if (log[pillName] == undefined) {
        //push a new array to state if it doesnt exist
        let tempArr = []
        tempArr.push(nowString)
        setLog({ ...log, [pillName]: tempArr })
      } else {
        //call functions for preventing double ups
        if (doubleTimeCheck(pillName)) {
          console.log('already added')
          setAdded(nowString)

          //setLog({ ...log, [pillName].push(timeNow) })
        } else {
          let tempElseArr = log[pillName]
          tempElseArr.push(nowString)
          console.log(tempElseArr)
          //replacing named array with new one.. will it work when more complex object
          setLog({ ...log, [pillName]: tempElseArr })
        }
      }
    }
  }

  function generatePillContent(pillName) {
    return (
      <>
        <button
          className="clickMe"
          onClick={(e) => {
            e.preventDefault()
            timeNow(pillName)
          }}
        >
          {pillName}
        </button>
        <h1>You took {pillName} at </h1>
      </>
    )
  }

  return (
    <>
      {generatePillContent(pillName)}
      <ul>
        {tramArr[0]
          ? tramArr.map((x) => (
              <li key={x}>
                {x}
                {deleteButton(x)}
              </li>
            ))
          : ''}
      </ul>
      {alreadyAdded ? (
        <h3>
          {' '}
          {pillName} {alreadyAdded} already saved
        </h3>
      ) : (
        ''
      )}
    </>
  )
}
