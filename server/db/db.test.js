const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const { getLastSessionById, getSessionById, addSession } = require('./db.js')

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
    const id = 8
    expect.assertions(1)
    return getLastSessionById(id, testDb).then((sessions) => {
      expect(sessions.id).toBe(8)
    })
  })
})

describe('assSession', () => {
  test('adds a new session to the database', () => {
    expect.assertions(7)

    const mockInfo = {
      date: '22-10-02',
      hour: '06:04',
      student_id: 7,
      studentNotes: 'Hello',
      teacher_id: 2,
      teacherNotes: 'Goodbye',
    }

    return addSession(mockInfo, testDb)
      .then(() => {
        return testDb('sessions').select()
      })
      .then((sessions) => {
        expect(sessions).toHaveLength(6)
        expect(sessions[5].student_id).toBe(7)
        expect(sessions[5].teacher_id).toBe(2)
        expect(sessions[5].studentNotes).toBe('Hello')
        expect(sessions[5].teacherNotes).toBe('Goodbye')
        expect(sessions[5].date).toBe('22-10-02')
        expect(sessions[5].hour).toBe('06:04')
      })
  })
})
