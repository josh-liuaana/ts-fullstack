import moviesReducer from "../movies";
import * as action from '../../actions/index'
import { Action } from "../../../ts-utils/types";

const mockData = [
    { id: 1, imdb_id: "tt1877830", img: "https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.7273_AL_.jpg", title: "The Batman", watched: false },
    { id: 2, title: 'Arrival', imdb_id: 'tt2543164', watched: false, img: 'https://imdb-api.com/images/original/MV5BNGU0NTA2YjctYWNlYy00ZDg1LTg5ZTItZWM3MWZiMDI5OGYzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDM3ODU2NDM@._V1_Ratio0.7273_AL_.jpg' }
]

const mockMovie = { 
  id: 1, 
  imdb_id: 'tt0120737', 
  img: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_Ratio0.6757_AL_.jpg', 
  title: 'The Lord of the Rings: The Fellowship of the Ring', 
  watched: false 
}

describe('Environment', () => {
  it('return true', () => {
    expect.assertions(1)
    expect(true).toBeTruthy()
  })
})

// moviesReducer(state, action) 
// action = { type, payload }

describe('Movies reducer', () => {
  
  it('initialises an empty state', () => {
    const state = moviesReducer(undefined, { type: '@@INIT' } as Action)
    expect(state).toStrictEqual([])
  })

  it('receives data, initial population of state', () => {
    const state = moviesReducer(undefined, action.setMovies(mockData))
    expect(state).toBe(mockData)
  })

  it('saves a movie into populated redux state', () => {
    const state = moviesReducer(
      mockData, action.saveOneMovie(mockMovie)
    )
    expect(state).toEqual(
      [...mockData, mockMovie]
    )
  })

  it('deletes a movie from redux state', () => {
    const state = moviesReducer(
      mockData, action.delMovie(1)
    )
    expect(state).toStrictEqual(
      [
        { id: 2, title: 'Arrival', imdb_id: 'tt2543164', watched: false, img: 'https://imdb-api.com/images/original/MV5BNGU0NTA2YjctYWNlYy00ZDg1LTg5ZTItZWM3MWZiMDI5OGYzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDM3ODU2NDM@._V1_Ratio0.7273_AL_.jpg' }
      ]
    )
  })

  it('updates a movie to watched', () => {
    const state = moviesReducer(mockData, action.updMovie(1))
    expect(state).toEqual(
      [
        { id: 1, imdb_id: "tt1877830", img: "https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.7273_AL_.jpg", title: "The Batman", watched: true },
        { id: 2, title: 'Arrival', imdb_id: 'tt2543164', watched: false, img: 'https://imdb-api.com/images/original/MV5BNGU0NTA2YjctYWNlYy00ZDg1LTg5ZTItZWM3MWZiMDI5OGYzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDM3ODU2NDM@._V1_Ratio0.7273_AL_.jpg' }
    ]
    )
  })

})