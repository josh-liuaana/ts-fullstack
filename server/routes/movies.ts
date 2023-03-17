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
  console.log('ROUTE: movie router -> first: ', movie);
  
  db.addMovie(movie)
    .then((idArray) => {
      console.log('ROUTE: idArray -> first then block: ', idArray) // [ { id: 28 } ]
      const idNum = idArray[0].id
      return db.getMovieById(idNum)
    })
    .then((dbMovie) => {
      console.log('ROUTE: dbMovie -> second then block: ', dbMovie)
      res.json(dbMovie)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.delMovie(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  const watched = req.body.watched
  db.updMovie(id, watched)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

export default router