import request from 'superagent'
import { Movies } from '../../ts-utils/types'

export function fetchMovies(): Promise<Movies> {
  return request.get('/v1/movies')
    .then((res) => res.body)
}