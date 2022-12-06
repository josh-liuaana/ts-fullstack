import type { Movies, AppThunkAction, Action } from '../../ts-utils/types'

import { fetchMovies } from '../apis/movies';

export const SAVE_MOVIES = 'SAVE_MOVIES'

export function setMovies(movies: Movies): Action {
  return {
    type: SAVE_MOVIES,
    payload: movies
  }
}

export function getMovies(): AppThunkAction {
  return (dispatch) => {
    return fetchMovies()
      .then(movies => dispatch(setMovies(movies)))
      .catch(err => console.log(err.message))
  }
}