import express from "express";
const router = express.Router()

import * as db from '../db/db'

router.get('/', (req, res) => {
  db.getAllMovies()
    .then((moviesArr) => {
      res.json(moviesArr)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

router.post('/', (req, res) => {
  const movie = req.body
  db.addMovie(movie)
    .then((idArray) => {
      const id = idArray[0]
      return db.getMovieById(id)
    })
    .then((dbMovie) => {
      res.json(dbMovie)
    })
    .catch((err) => console.log(err.message))
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.delMovie(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => console.log(err.message))
})

router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  const watched = req.body.watched
  db.updMovie(id, watched)
    .then((result) => {
      console.log(result) //always 1? shouldnt it change if false?
      res.json(result)
    })
    .catch((err) => console.log(err.message))
})

export default router