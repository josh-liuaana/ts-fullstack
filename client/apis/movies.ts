import request from 'superagent'
import { Movies, Movie } from '../../ts-utils/types'

export function fetchMovies(): Promise<Movies> {
  return request.get('/v1/movies')
    .then((res) => res.body)
}

export function postOneMovie(movie: Partial<Movie>): Promise<Movie> {
  return request
    .post('/v1/movies')
    .send(movie)
    .then((res) => {
      return res.body
    })
}

export function deleteMovie(id: number): Promise<null> {
  return request
    .delete('/v1/movies/' + id)
    .then(() => {return null})
}