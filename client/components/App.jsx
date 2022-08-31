import React, { useState } from 'react'
import AddText from './AddText'
import AddColor from './AddColor'

const App = () => {
  const [title, setTitle] = useState('Your artwork title here...')

  function addText(text) {
    console.log('submitted', text)
    // setTitle(text)
  }

  // function addColor(colorHex) {
  //   let check = newColor.find((x) => x === colorHex)
  //   if (check == undefined && colorHex != '') {
  //     setNewColor([...newColor, colorHex])
  //   }
  // }

  return (
    <>
      <header>
        <h1>Personal Project</h1>
        <h2>{title}</h2>
      </header>
      <div className="form">
        <div className="studentNotes">
          <AddText addText={addText} title="studentNotes" />
          <br></br>
        </div>
        <div className="teacherNotes">
          <AddText addText={addText} title="teacherNotes" />
        </div>
      </div>
    </>
  )
}
//style={{'background: transparent none repeat scroll 0% 0%; height: 100%; width: 100%; cursor: pointer; position: relative; outline: currentcolor none medium; border-radius: 50%; box-shadow: rgb(244, 67, 54) 0px 0px 0px 15px inset; transition: box-shadow 100ms ease 0s;'}})

export default App
