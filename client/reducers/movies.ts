import { Movies, Action } from '../../ts-utils/types'
import { SAVE_MOVIES, SAVE_ONE_MOVIE, DEL_MOVIE, UPDATE_MOVIE } from '../actions'

const initialState: Movies = []

function moviesReducer(state = initialState, action: Action) {
  const {type, payload} = action
  switch(type) {

    case SAVE_MOVIES:
      return payload

    case SAVE_ONE_MOVIE:
      return [...state, payload]

    case DEL_MOVIE:
      return state.filter(movie => movie.id !== payload)

    case UPDATE_MOVIE:
      return state.map((movie) => {
        if (movie.id === payload) {
          movie.watched = !movie.watched
          return movie
        } else {
          return movie
        }
      })
      
    default:
      return state
  }
}

export default moviesReducer