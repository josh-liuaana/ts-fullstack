import connection from '../connection'
import * as db from '../db'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
})

afterAll(async () => {
  await connection.migrate.rollback()
  await connection.destroy()
})

describe('Environment', () => {
  it('returns true', () => {
    expect.assertions(1)
    expect(true).toBeTruthy()
  })
})

describe('Movies DB', () => {
  
  describe('get all func', () => {
    it('fetches all the seeded movies', async () => {
      expect.assertions(2)
      const result = await db.getAllMovies()
      expect(result).toHaveLength(2)
      expect(result[0]).toEqual(
        {
          "id": 1,
          "imdb_id": "tt1877830",
          "img": "https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.7273_AL_.jpg",
          "title": "The Batman",
          "watched": 0,
        }
      )
    })
  })

  describe('get by id func', () => {
    it('fetched a specific movie', async () => {
      expect.assertions(1)
      const result = await db.getMovieById(2)
      expect(result).toMatchInlineSnapshot(`
        {
          "id": 2,
          "imdb_id": "tt2543164",
          "img": "https://imdb-api.com/images/original/MV5BNGU0NTA2YjctYWNlYy00ZDg1LTg5ZTItZWM3MWZiMDI5OGYzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDM3ODU2NDM@._V1_Ratio0.7273_AL_.jpg",
          "title": "Arrival",
          "watched": 0,
        }
      `)
    })
  })

  describe('add movie func', () => {
    it('adds a movie to the db', async () => {
      expect.assertions(3)
      const id = await db.addMovie({
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        imdb_id: 'tt0120737',
        watched: false,
        img: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_Ratio0.6757_AL_.jpg',
      })
      expect(id).toStrictEqual([3])

      const result = await db.getAllMovies()
      expect(result).toHaveLength(3)
      expect(result[2]).toMatchInlineSnapshot(`
        {
          "id": 3,
          "imdb_id": "tt0120737",
          "img": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_Ratio0.6757_AL_.jpg",
          "title": "The Lord of the Rings: The Fellowship of the Ring",
          "watched": 0,
        }
      `)
    })
  })

  describe('delete movie func', () => {
    it('removes the movie from the database', async () => {
      expect.assertions(1)
      await db.delMovie(1)
      const result = await db.getAllMovies()
      expect(result).toHaveLength(1)
    })
  })

  describe('update movie func', () => {
    it('updates the watched boolean', async () => {
      expect.assertions(1)
      await db.updMovie(1, true)
      const result = await db.getMovieById(1)
      expect(result.watched).toBe(1)
    })
  })

})
