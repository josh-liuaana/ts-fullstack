import store from '../client/store'
import type { ThunkDispatch, ThunkAction } from 'redux-thunk'

// PROPER TYPE TINGZ

export interface Movie {
  id: number
  title: string
  imdb_id: string
  watched: boolean
  img: string
}

export type Movies = Movie[]

export interface ImdbMovie {
  description: string
  id: string
  image: string
  resultType: string
  title: string
}

export type ImdbMovies = ImdbMovie[]

export interface ImdbTrailer {
  errorMessage: string
  fullTitle: string
  imDbId: string
  title: string
  type: string
  videoId: string
  videoUrl: string
  year: string
}

// ACTION TINGZ

export type MovieAction = {type: string; payload: Movie}
export type MovieArrayAction = {type: string; payload: Movies}
export type MoviePartialAction = {type: string; payload: Partial<Movie>}
export type IdAction = {type: string; payload: number}

export type Action = MovieAction | MovieArrayAction | MoviePartialAction | IdAction

// STORE BOIIS

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, never, Action>
export type AppThunkAction<T = unknown> = ThunkAction<
  Promise<T>,
  RootState,
  never,
  Action
>