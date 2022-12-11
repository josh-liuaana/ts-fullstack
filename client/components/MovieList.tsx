import {useAppSelector} from '../../ts-utils/hooks'
import { Movies } from '../../ts-utils/types'
import { Icon, Card, Image } from 'semantic-ui-react'

function MovieList() {
  const movieList: Movies = useAppSelector(state => state.movies)
  
  return (
    <>
      <div className='movie-tiles-cont'>
        {(movieList).map((movie) => (
          <div key={movie.id}>
            <Card.Group>
              <Card>
                <Image src={movie.img} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{movie.title}</Card.Header>
                  <Card.Meta>
                    <span className='release-year'>movie.year?</span>
                  </Card.Meta>
                  <Card.Description>
                    movie.director?
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='video' />
                    watched/not watched
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
        ))}
      </div>
    </>
  )
}

export default MovieList