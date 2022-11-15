import { fetchStudents } from './studentsActions'
import { getAllStudents } from '../studentsAPI'

jest.mock('../studentsAPI')
const mockStudents = [
  { name: 'bleremy', instrument: 'gat' },
  { name: 'lil jimmy jim', instrument: 'piano' },
]
getAllStudents.mockReturnValue(Promise.resolve(mockStudents))

const fakeDispatch = jest.fn()
beforeEach(() => {
  jest.clearAllMocks()
})

describe('setStudents', () => {
  test('dispactches set Student data', () => {
    const thunkFunc = fetchStudents()
    return thunkFunc(fakeDispatch).then(() => {
      const fakeDFirstCall = fakeDispatch.mock.calls[0][0]
      expect(fakeDFirstCall.type).toBe('SET_STUDENTS_DATA')
      expect(fakeDFirstCall.payload[0].name).toBe('bleremy')

      return null
    })
  })
})
