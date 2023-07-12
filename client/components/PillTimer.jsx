import React, { useState } from 'react'
import moment from 'moment'

//const localizer = momentLocalizer(moment)

export default function PillTimer() {
  const nonStateArr = []
  const [logArr, setLogArr] = useState([''])
  const tramadol, setTramadol = useState()
  //make and array of times that the thing was taken
  //on click push into the array
  //have the array be the state
  //display as a log type i.e. log of the array
  //editable array

  function timeNow() {
    let nowString = moment().calendar()
    // checking time is getting correctly console.log('nowstring:', nowString, 'type:', typeof nowString)
    setLogArr(logArr.push(nowString))

    // setLogArr(nonStateArr)
    //  console.log('non state arr', nonStateArr)
    console.log('state log', logArr)
  }

  setTramadol(<ul>
        {logArr.map((x) => (
          <li>{x}</li>
        ))})

  return (
    <>
      <button
        className="clickMe"
        onClick={(e) => {
          e.preventDefault()
          timeNow()
        }}
      >
        Tramadol
      </button>
      <h1>You took tramadol at </h1>
      <ul>{tramadol}</ul>
    </>
  )
}
