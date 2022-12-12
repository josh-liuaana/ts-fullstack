import { useState, SyntheticEvent, ChangeEvent } from 'react'
import {useAppDispatch} from '../../ts-utils/hooks'
import { Form, Input, Button } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

import { searchForMovie } from '../apis/imdb'
import { addMovieThunk } from '../actions'
import { ImdbMovies, ImdbMovie } from '../../ts-utils/types'

function AddMovie() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [movieSearch, setMovieSearch] = useState('')
  const [results, setResults] = useState<ImdbMovies>([])

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault()
    searchForMovie(movieSearch)
    .then((resultsArray) => {
      setResults(resultsArray)
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
      {results.map((movie) => (
        <div className="result" key={movie.id}>
          <img src={movie.image} alt="movie poster" />
          <h6>{movie.title}</h6>
          <p>{movie.description}</p>
          <button onClick={() => handleAdd(movie)}>Add</button>
        </div>
      ))}
    </div>
  )
}

export default AddMovie;