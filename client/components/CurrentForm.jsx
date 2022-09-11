import React from 'react'

export default function CurrentForm({
  title,
  handelChange,
  state,
  formName,
  handleSubmit,
  bool,
}) {
  function localHandleChange(e) {
    handelChange([e.target.name], e.target.value)
  }

  function localHandleSubmit(e) {
    e.preventDefault()
    handleSubmit(state)
  }

  return (
    <div className="notesInput">
      <form onSubmit={localHandleSubmit}>
        <label htmlFor={title}>
          <h1>
            <strong>
              {title}
              {/* {data.submitted} */}
            </strong>
          </h1>
        </label>

        {bool ? (
          <div>
            <input className="clickMe" type="submit" value="submit all notes" />
          </div>
        ) : (
          ' '
        )}
        <textarea
          className="textBox"
          type="text"
          id={title}
          name={formName}
          value={state[formName]}
          onChange={localHandleChange}
          size="sm"
        ></textarea>
      </form>
    </div>
  )
}

{
  /* TODO implement clear buttone <button
className="clickMe"
onClick={(e) => {
  e.preventDefault()
  // setData(initialData)
}}
>
Clear text
</button> */
}
