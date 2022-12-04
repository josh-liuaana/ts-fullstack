import type { AppThunkAction } from '../store'

import { Movie, Movies } from '../../ts-utils/types'

export type MovieArrAction = { type: string; payload: Movies }
export type MovieAction = { type: string; payload: Movie }
export type PartialMovieAction = { type: string; payload: Partial<Movie> }
export type IdAction = { type: string; payload: number }

export type Action = MovieArrAction | MovieAction | PartialMovieAction | IdAction