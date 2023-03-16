import { useState, ChangeEvent, FormEvent } from 'react'
import {useAppDispatch} from '../../ts-utils/hooks'
import { Form, Input, Button, Card, Image, Icon } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

import { searchForMovie } from '../apis/imdb'
import { addMovieThunk, receieveMovies, requestMovies } from '../actions'
import { ImdbMovies, ImdbMovie } from '../../ts-utils/types'
import Waiting from './Waiting'

function AddMovie() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [movieSearch, setMovieSearch] = useState('')
  const [results, setResults] = useState<ImdbMovies>([])

  const handleSubmit = (evt: FormEvent) => {
    
    evt.preventDefault()
    // console.log('API calls currently disabled')
    dispatch(requestMovies())
    searchForMovie(movieSearch)
    // console.log(movieSearch)
    // searchImdb(movieSearch)
    .then((resultsArray) => {
      console.log(resultsArray)
      setResults(resultsArray)
      dispatch(receieveMovies())
    })
    .catch((err) => console.log(err.message))
  }


  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setMovieSearch(evt.target.value)
  }

  const handleAdd = (movie: Partial<ImdbMovie>) => {
    const formattedMovie = {
      imdb_id: movie.id,
      title: movie.title,
      img: movie.image,
      // description: movie.description, // need to re migrate and run new seeds
      watched: false,
    }
    dispatch(addMovieThunk(formattedMovie))
    navigate('/')
  }



  return (
    <div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Field
              control={Input}
              label="Search new movie"
              placeholder="The Lord of the Rings..."
              onChange={handleChange}
              value={movieSearch}
            />
          </Form.Group>
          <Form.Field control={Button}>Search</Form.Field>
        </Form>
      </div>

      <Waiting />

      <Card.Group >
      {results.map((movie) => (
        <div key={movie.id} className='movie-tile'>
          <Card>
            <Image src={movie.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{movie.title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Button animated='fade' fluid basic color='green' onClick={() => handleAdd(movie)}>
                <Button.Content visible> Add Movie </Button.Content>
                <Button.Content hidden>
                  <Icon name='add' />
                </Button.Content>
              </Button>
            </Card.Content>
          </Card> 
        </div>
        ))}
        </Card.Group>
    </div>
  )
}

export default AddMovie;