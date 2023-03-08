import * as action from '../index'

describe('Environment', () => {
  it('return true', () => {
    expect.assertions(1)
    expect(true).toBeTruthy()
  })
})

describe('successfully loads an action creator',() => {
  it('creates a request action object', () => {
    expect(action.requestMovies()).toEqual({
      type: 'REQUEST_MOVIES',
      payload: null
    })
  })

  it('creates del action', () => {
    expect(action.delMovie(1)).toEqual({
      type: 'DEL_MOVIE',
      payload: 1
    })
  })
})

