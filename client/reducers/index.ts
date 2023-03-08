import { combineReducers } from 'redux'

import movies from './movies'
import imdbData from './imdb'
import waiting from './waiting'

export default combineReducers({
  movies,
  imdbData,
  waiting
})
