import events from './events'
const { setEventsData, addEventsData } = require('../Actions/eventsActions')

describe('events reducer', () => {
  test('sets the events from actions', () => {
    const action = setEventsData([
      { title: 'something' },
      { title: 'somethingsecond' },
    ])
    const newState = events([], action)
    expect(newState[0].title).toBe('something')
    expect(newState[1].title).toBe('somethingsecond')
  })

  test('adds events the the state', () => {
    const action = addEventsData([{ title: 'three' }, { title: 'four' }])
    const newState = events([{ title: 'one' }, { title: 'two' }], action)
    expect(newState[2].title).toBe('three')
    expect(newState[3].title).toBe('four')
  })
})
