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

// describe('assSession', () => {
//   test('reveives correct information from routes', () => {
//     expect.assertions(1)
//     const id = 113
//     return addSession(info, testDb).then((sessions) => {
//       console.log(sessions)
//       expect(sessions.id).toBe(111)
//     })
//   })
// })
