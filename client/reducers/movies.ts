import { Movies, Action } from '../../ts-utils/types'
import { SAVE_MOVIES } from '../actions'

const initialState: Movies = []

function moviesReducer(state = initialState, action: Action) {
  const {type, payload} = action
  switch(type) {
    case SAVE_MOVIES:
      return payload
    default:
      return state
  }
}

export default moviesReducer