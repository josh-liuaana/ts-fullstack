/** @jest-environment node */
import request from "supertest";
import server from "../../server";

import * as db from '../../db/db'

jest.mock('../../db/db')

beforeEach(() => {
  jest.resetAllMocks()
})

describe('Environment', () => {
  it('returns true', () => {
    expect.assertions(1)
    expect(true).toBeTruthy()
  })
})

describe("'/' - get", () => {

  it('responds with a list of movies', async () => {
    expect.assertions(2)
    jest.mocked(db.getAllMovies).mockResolvedValue([
      { id: 1, imdb_id: "tt1877830", img: "https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.7273_AL_.jpg", title: "The Batman", watched: false },
      { id: 2, title: 'Arrival', imdb_id: 'tt2543164', watched: false, img: 'https://imdb-api.com/images/original/MV5BNGU0NTA2YjctYWNlYy00ZDg1LTg5ZTItZWM3MWZiMDI5OGYzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDM3ODU2NDM@._V1_Ratio0.7273_AL_.jpg' }
    ])
    const result = await request(server).get('/v1/movies')
    expect(result.body).toHaveLength(2)
    expect(result.body[0]).toEqual({
      "id": 1,
      "imdb_id": "tt1877830",
      "img": "https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.7273_AL_.jpg",
      "title": "The Batman",
      "watched": false,
    })
  })

  it('throws error if fails', async () => {
    expect.assertions(1)
    jest.mocked(db.getAllMovies).mockRejectedValue(new Error('Database Error'))
    const result = await request(server).get('/v1/movies')
    expect(result.statusCode).toBe(500)
  })

})

describe("'/' - post", () => {
  const newMovie = {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    imdb_id: 'tt0120737',
    watched: false,
    img: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_Ratio0.6757_AL_.jpg',
  }

  it('adds movie to the database', async () => {

    expect.assertions(4)
    jest.mocked(db.addMovie).mockResolvedValue([3])
    jest.mocked(db.getMovieById).mockResolvedValue({...newMovie, id: 3})

    const result = await request(server).post('/v1/movies').send(newMovie)
    expect(result.statusCode).toBe(200)
    expect(result.body).toEqual({...newMovie, id: 3})
    expect(db.getMovieById).toHaveBeenCalledWith(3)
    expect(db.addMovie).toHaveBeenCalledWith(newMovie)
  })

  it('throws error if fails', async () => {
    expect.assertions(1)
    jest.mocked(db.addMovie).mockRejectedValue(new Error('Database Error'))
    const result = await request(server).post('/v1/movies').send(newMovie)
    expect(result.statusCode).toBe(500)
  })

})

describe("'/:id' - delete", () => {
  
  it('deletes movie from the database', async () => {
    expect.assertions(2)
    jest.mocked(db.delMovie).mockResolvedValue(200)
    const result = await request(server).delete('/v1/movies/1')
    expect(result.statusCode).toBe(200)
    expect(db.delMovie).toHaveBeenCalledWith(1)
  })

  it('throws error if fails', async () => {
    expect.assertions(1)
    jest.mocked(db.delMovie).mockRejectedValue(new Error('Database Error'))
    const result = await request(server).delete('/v1/movies/789')
    expect(result.statusCode).toBe(500)
  })

})

describe("'/:id' - update", () => {

  it('updates movie in the database', async () => {
    jest.mocked(db.updMovie).mockResolvedValue(true)
    const result = await request(server).patch('/v1/movies/1')
    expect(result.body).toBe(true)
  })

  it('throws error if fails', async () => {
    expect.assertions(1)
    jest.mocked(db.updMovie).mockRejectedValue(new Error('Database Error'))
    const result = await request(server).patch('/v1/movies/789')
    expect(result.statusCode).toBe(500)
  })

})