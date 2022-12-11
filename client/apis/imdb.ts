import request from 'superagent'

export function searchForMovie(movieStr: string): Promise<[]> {
  return request

    .get(`https://imdb-api.com/en/API/SearchMovie/${process.env.IMDB_KEY}/${movieStr}`)
    .then((res) => {
      return res.body.results
    })
}
