import {useAppSelector} from '../../ts-utils/hooks'
import { Movies } from '../../ts-utils/types'

function MovieList() {
  const movieList: Movies = useAppSelector(state => state.movies)
  console.log(movieList)

  return (
    <div>
      <h1>Moo-vies</h1>
      <div>
        {(movieList).map((movie) => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </div>
    </div>
  )
}

export default MovieList