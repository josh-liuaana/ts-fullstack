import {useAppSelector} from '../../ts-utils/hooks'
import { Movies } from '../../ts-utils/types'
import SingleMovieTile from './SingleMovieTile'

function MovieList() {

  // get info from state, defining the variable to have the Movies type
  const movieList: Movies = useAppSelector(state => state.movies)

  return (
      <div className='movie-tiles-cont'>
        {(movieList).map((movie) => (
            <SingleMovieTile key={movie.id} movie={movie} />
        ))}
      </div>
  )
}

export default MovieList