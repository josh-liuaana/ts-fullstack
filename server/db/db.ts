import connection from "./connection";
import type { Movie } from "../../ts-utils/types";

export function getAllMovies(db = connection): Promise<Movie[]> {
  return db('movies').select('*')
}