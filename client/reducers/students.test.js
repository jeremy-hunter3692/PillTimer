import students from './students'
const { setStudents } = require('../Actions/studentsActions')

describe('students reducer', () => {
  test('sets the students from actions', () => {
    const action = setStudents([
      { name: 'test1', instrument: 'piano' },
      { name: 'test2', instrument: 'guitar' },
    ])

    const newState = students([], action)
    expect(newState[0].instrument).toBe('piano')
    expect(newState[0].name).toBe('test1')
    expect(newState[1].instrument).toBe('guitar')
    expect(newState[1].name).toBe('test2')
  })
})
