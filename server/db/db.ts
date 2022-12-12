import connection from "./connection";
import type { Movie } from "../../ts-utils/types";

export function getAllMovies(db = connection): Promise<Movie[]> {
  return db('movies').select('*')
}

export function getMovieById(id: number, db = connection): Promise<Movie> {
  return db('movies').select().where('id', id).first()
}

export function addMovie(movie: Partial<Movie>, db = connection): Promise<number[]> {
  return db('movies').insert(movie)
}

export function delMovie(id: number, db = connection): Promise<number[]> {
  return db('movies').where('id', id).del()
}
