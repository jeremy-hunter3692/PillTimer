const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const { getLastSession, getSessionById, addSession } = require('./db.js')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getLastSession', () => {
  test('gets last session from the database', () => {
    expect.assertions(1)
    return getLastSession(testDb).then((sessions) => {
      expect(sessions.id).toBe(3)
    })
  })
})

describe('assSession', () => {
  test.todo('adds a new session to the database', () => {
    expect.assertions(1)
    const id = [113]
    const mockInfo = {
      date: '22-10-02',
      hour: '06:04',
      student_id: 7,
      studentNotes: 'Hello',
      teacher_id: 2,
      teacherNotes: 'Goodbye',
    }

    return addSession(mockInfo, testDb).then((sessions) => {
      expect(sessions).toEqual(id)
    })
  })
})
