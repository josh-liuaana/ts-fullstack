import request from 'superagent'
import { Movie } from '../../ts-utils/types'

export function fetchMovies(): Promise<Movie[]> {
  return request.get('/v1/movies')
    .then((res) => res.body)
}