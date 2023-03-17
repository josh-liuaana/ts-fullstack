import connection from "./connection";
import type { Movie, Movies, AddMovieResult } from "../../ts-utils/types";


//Simple get all movies route, have used the select all, but would work without. 
// Includes the expected return of the Movie array Promise<Movies>

export function getAllMovies(db = connection): Promise<Movies> {
  return db('movies').select('*')
}

// return single movie, id has been defined as a number. 
// and expected return is a single movie Promise<Movie>

export function getMovieById(id: number, db = connection): Promise<Movie> {
  return db('movies').select().where('id', id).first()
}

// add db function with the defined type of movie as Partial<Movie> as the passed information 
//wont have an id. Returned value will simply be the new number, therefore Promise<number[]>

export function addMovie(movie: Partial<Movie>, db = connection): Promise<AddMovieResult[]> {
  return db('movies').insert(movie).returning(['id'])
}

// del db function with defined type of numbe for id and return the id of deleted

export function delMovie(id: number, db = connection): Promise<number> {
  return db('movies').where('id', id).del()
}

// upd db func, defined both types for id (number) and watched (boolean). 
// returns the 0/1 watched bool as a number
// why is console log in the route always 1 though?

export function updMovie(id: number, watched: boolean, db = connection): Promise<boolean> {  
  return db('movies').where('id', id).update({watched: watched})
}
