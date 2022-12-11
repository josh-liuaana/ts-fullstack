import request from 'superagent'
import { Movies, Movie } from '../../ts-utils/types'

export function fetchMovies(): Promise<Movies> {
  return request.get('/v1/movies')
    .then((res) => res.body)
}

export function postOneMovie(movie: Partial<Movie>) {
  return request
    .post('/v1/movies')
    .send(movie)
    .then((res) => {
      return res.body
    })
}