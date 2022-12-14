import request from 'superagent'
import { ImdbMovies, ImdbTrailer } from '../../ts-utils/types'

// searches the external imdb-api for movies based on search (string)
// returns an array of movies, <Promise<ImdbMovies>
// ImdbMovies has been defined here, perhaps for more strict types, but Promise<[]> is also happy

export function searchForMovie(movieStr: string): Promise<ImdbMovies> {
  return request
    .get(`https://imdb-api.com/en/API/SearchMovie/${process.env.IMDB_KEY}/${movieStr}`)
    .then((res) => {
      return res.body.results
    })
}

// searches ext imdb based on a given imdb_id string
// return the promise of an array, could defined this more in types but not needed

export function movieData(id: string): Promise<[]> {
  return request
    .get(`https://imdb-api.com/en/API/Title/${process.env.IMDB_KEY}/${id}`)
    .then((res) => {
      console.log('movie data api call', res.body)
      return res.body
  })
}

// searches ext imdb based on a given imdb_id string for particular youtibe trailer data
// return the promise of ImdbTrailer which has been defined in types

export function youtubeTrailer(id: string): Promise<ImdbTrailer> {
  return request
    .get(`https://imdb-api.com/en/API/YouTubeTrailer/${process.env.IMDB_KEY}/${id}`)
    .then((res) => {
      console.log('trailer api call', res.body)
      return res.body
    })
}