import { useEffect, useState } from 'react'
import { Movie } from '../../ts-utils/types'
import {fetchMovies} from '../apis/movies'

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    fetchMovies()
      .then(moviesArr => setMovies(moviesArr))
      .catch(err => console.log('oh nooooo precious', err.message))
  }, [])

  console.log(movies);
  

  return (
    <div>
      <h1>Moo-vies</h1>
      <div>
        {movies.map((movie) => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </div>
    </div>
  )
}

export default MovieList
