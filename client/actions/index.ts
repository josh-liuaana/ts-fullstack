import type { Movies, AppThunkAction, Action, Movie } from '../../ts-utils/types'

import { fetchMovies, postOneMovie, deleteMovie, updateMovie } from '../apis/movies';
import { movieData } from '../apis/imdb';

export const SAVE_MOVIES = 'SAVE_MOVIES'
export const SAVE_ONE_MOVIE = 'SAVE_ONE_MOVIE'
export const DEL_MOVIE = 'DEL_MOVIE'
export const UPDATE_MOVIE = 'UPDATE_MOVIE'
export const IMDB_DATA = 'IMDB_DATA'

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

export function delMovie(id: number): Action {
  return {
    type: DEL_MOVIE,
    payload: id
  }
}

export function updMovie(id: number): Action {
  return {
    type: UPDATE_MOVIE,
    payload: id
  }
}

// imdb actions

export function loadMovieData(data: object): Action { // could probably do with ome tighteningß
  return {
    type: IMDB_DATA,
    payload: data
  }
}

// thunks

export function getMovies(): AppThunkAction {
  return (dispatch) => {
    return fetchMovies()
      .then(movies => dispatch(setMovies(movies)))
      .catch(err => console.log(err.message))
  }
}

export function addMovieThunk(movie: Partial<Movie>): AppThunkAction {
  return (dispatch) => {
    return postOneMovie(movie)
      .then((movieFromDb) => {
        dispatch(saveOneMovie(movieFromDb))
      })
      .catch((err) => console.log(err.message))
  }
}

export function deleteMovieThunk(id: number): AppThunkAction {
  return (dispatch) => {
    return deleteMovie(id)
      .then(() => {
        dispatch(delMovie(id))
      })
      .catch((err) => console.log(err.message))
  }
}

export function updateMovieThunk(id: number, watched: boolean): AppThunkAction {
  return (dispatch) => {
    return updateMovie(id, watched)
      .then(() => {
        dispatch(updMovie(id))
      })
      .catch((err) => console.log(err.message))
  }
}

export function getImdbData(id: string): AppThunkAction {
  return (dispatch) => {
    return movieData(id)
      .then((data) => {
        dispatch(loadMovieData(data))
      })
      .catch((err) => console.log(err.message))
  }
}