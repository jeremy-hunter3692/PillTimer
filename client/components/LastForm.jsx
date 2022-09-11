import React from 'react'

export default function LasttForm({ title, value }) {
  return (
    <div className="notesInput">
      <form>
        <label htmlFor={title}>
          <h1>
            <strong>{title}</strong>
          </h1>
        </label>
        <textarea
          className="textBox"
          type="text"
          id={title}
          value={value}
          name="name"
          size="sm"
        ></textarea>
      </form>
    </div>
  )
}
