import { fetchEvents, SET_ERROR } from '../../client/Actions/eventsActions'
import { getSessions } from '../sessionsAPI'

jest.mock('../sessionsAPI')
const mockSessions = [{ name: 'banana' }, { name: 'apple' }]
getSessions.mockReturnValue(Promise.resolve(mockSessions))

const fakeDispatch = jest.fn()
beforeEach(() => {
  jest.clearAllMocks()
})

describe('fetchEvents', () => {
  test('dispatches setEvents', () => {
    const thunkFunk = fetchEvents()
    return thunkFunk(fakeDispatch).then(() => {
      const fakedispatchFirstCallArgument = fakeDispatch.mock.calls[0][0]
      expect(fakedispatchFirstCallArgument.type).toBe('SET_EVENTS_DATA')
      return null
    })
  })

  //Figure out this test = Probably need to  got over redux thunky actions writing to check this
  test('dispatches error message if api fails', () => {
    getSessions.mockImplementation(() => Promise.reject(new Error('failure')))
    return fetchEvents()(fakeDispatch).then(() => {
      const fakeDispatchSecondAction = fakeDispatch.mock.calls[0][0]
      expect(fakeDispatchSecondAction.type).toBe(SET_ERROR)
      expect(fakeDispatchSecondAction.errMessage).toBe('failure')
      return null
    })
  })
})
