import request from 'superagent'
import { Movies, Movie } from '../../ts-utils/types'

const url = '/v1/movies'

// fetchMovies function expected to return a promise of the array Movies

export function fetchMovies(): Promise<Movies> {
  return request
    .get(url)
    .then((res) => res.body)
}

// postOneMovie defined/sent as Partial because there is no id
// expeected return is the promise with single movie

export function postOneMovie(movie: Partial<Movie>): Promise<Movie> {
  return request
    .post(url)
    .send(movie)
    .then((res) => {
      return res.body
    })
}

// del func sent just the id defined as a numbe
// returns the Prmoiuse of null, as nothing is getting returned from the route
// one the delete route the return is just the sendStatus(200)

export function deleteMovie(id: number): Promise<null> {
  return request
    .delete(`${url}/${id}`)
    .then(() => {return null})
}

// upd func defines both id and the watched bool, returns the bool from the db as a promise
// also just logs 1 everytime, like the route


export function updateMovie(id: number, watched: boolean): Promise<boolean> {
  return request
    .patch(`${url}/${id}`)
    .send({watched})
    .then((res) => {
      return res.body
    })
}