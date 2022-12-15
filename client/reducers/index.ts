import { combineReducers } from 'redux'

import movies from './movies'
import imdbData from './imdb'

export default combineReducers({
  movies,
  imdbData
})
