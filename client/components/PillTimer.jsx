import React, { useState } from 'react'
import moment from 'moment'

export default function PillTimer() {
  const [tramArr, setTramArr] = useState([])
  const [alreadyAdded, setAdded] = useState(null)

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
  }

  function timeNow() {
    let nowString = moment().calendar()
    if (nowString != tramArr[tramArr.length - 1]) {
      setTramArr([...tramArr, nowString])
    } else {
      console.log('added')

      //bug when deleted and then added again. CHeck somethign here
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
      {alreadyAdded ? <h3> {alreadyAdded} already saved</h3> : ''}
    </>
  )
}
