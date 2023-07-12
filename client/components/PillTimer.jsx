import React, { useState } from 'react'
import moment from 'moment'

export default function PillTimer() {

  const [tramArr, setTramArr] = useState([])
  const [alreadyAdded, setAdded] = useState(null)
 
  function timeNow() {
    let nowString = moment().calendar()
    if (nowString != tramArr[tramArr.length - 1]) {
      setTramArr([...tramArr, nowString])
    } else {
      console.log('added')
      setAdded(nowString)
    }
  }

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
      <ul>{tramArr[0] ? tramArr.map((x) => <li key={x}>{x}</li>) : ''}</ul>
      {alreadyAdded ? <h3> {alreadyAdded} already saved</h3> : ''}
    </>
  )
}
