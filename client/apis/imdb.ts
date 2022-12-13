import request from 'superagent'

export function searchForMovie(movieStr: string): Promise<[]> {
  return request
    .get(`https://imdb-api.com/en/API/SearchMovie/${process.env.IMDB_KEY}/${movieStr}`)
    .then((res) => {
      return res.body.results
    })
}

export function movieData(id: string): Promise<[]> {
  return request
    .get(`https://imdb-api.com/en/API/Title/${process.env.IMDB_KEY}/${id}`)
    .then((res) => {
      console.log('movie data api call', res.body)
      return res.body
  })
}

export function youtubeTrailer(id: string): Promise<[]> {
  return request
    .get(`https://imdb-api.com/en/API/YouTubeTrailer/${process.env.IMDB_KEY}/${id}`)
    .then((res) => {
      console.log('trailer api call', res.body)
      return res.body
    })
}