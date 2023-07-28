import nock from 'nock'

const { addSessions, getLastSessionById } = require('./sessionsAPI')

const apiUrl = '/api/v1/sessions'
const start = new Date()
const end = new Date()
const mockSessionData = [{ start: start, end: end }]
const replyStart = start
const replyEnd = end
const mockReply = [{ start: replyStart, end: replyEnd }]

describe('sessions api', () => {
  test('gets last session from the database', () => {
    const scope = nock('http://localhost')
      .get(apiUrl + '/1')
      .reply(200, { data: 'testing data' })
    return getLastSessionById(1).then((result) => {
      expect(result).toEqual({ data: 'testing data' })
      expect(scope.isDone()).toBe(true)
    })
  })

  test('adds a session to the database', () => {
    const scope = nock('http://localhost')
      .post(apiUrl)
      .reply(200, mockSessionData)

    return addSessions(mockSessionData).then((result) => {
      expect(result.start).toEqual(mockReply.start)
      expect(result.end).toEqual(mockReply.end)
      expect(scope.isDone()).toBe(true)
    })
  })
  
  //figure out how to check errors from apiclient
  // test('returns an error from add Session', () => {
  //   const scope = nock('http://localhost')
  //     .post(apiUrl)
  //     .reply(400, { data: 'testing data' })
  //   const data = { data: 'test' }
  //   return addSession(data).then((result) => {
  //     expect(result).toBe('post not saved')
  //     expect(scope.isDone()).toBe(true)
  //   })
  // })
})
