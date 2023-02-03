import React from 'react'

export default function MoveToNextStudentPopUp({ setNextStudentState }) {
  return (
    <>
      <div className="changeStudentPop">
        <header>The session has ended do do you want to change student?</header>
        <button
          className="clickMe"
          onClick={(e) => {
            e.preventDefault()
            console.log('clicked')
            setNextStudentState(false)
          }}
        >
          {' '}
          change
        </button>
        <button
          className="clickMe"
          onClick={(e) => {
            e.preventDefault()
            setNextStudentState(true)
          }}
        >
          {' '}
          not yet
        </button>
      </div>
    </>
  )
}
