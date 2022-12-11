import type { Movies, AppThunkAction, Action, Movie } from '../../ts-utils/types'

import { fetchMovies, postOneMovie } from '../apis/movies';

export const SAVE_MOVIES = 'SAVE_MOVIES'
export const SAVE_ONE_MOVIE = 'SAVE_ONE_MOVIE'

export function setMovies(movies: Movies): Action {
  return {
    type: SAVE_MOVIES,
    payload: movies
  }
}

export function saveOneMovie(movie: Movie): Action{
  return {
    type: SAVE_ONE_MOVIE,
    payload: movie,
  }
}

export function getMovies(): AppThunkAction {
  return (dispatch) => {
    return fetchMovies()
      .then(movies => dispatch(setMovies(movies)))
      .catch(err => console.log(err.message))
  }
}

export function addMovieThunk(movie: Partial<Movie>) {
  return (dispatch) => {
    postOneMovie(movie)
      .then((movieFromDb) => {
        dispatch(saveOneMovie(movieFromDb))
      })
      .catch((err) => console.log(err.message))
  }
}